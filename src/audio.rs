use rustfft::{
    num_complex::{Complex, ComplexFloat},
    FftPlanner,
};
use std::path::PathBuf;
use std::result::Result::Ok;
use std::{
    fs::File,
    io::BufReader,
    sync::{Arc, RwLock},
    time::Duration,
};

use anyhow::Result as AnyResult;
use rodio::Source;

pub fn play(
    close: Arc<RwLock<bool>>,
    lvl: Arc<RwLock<f32>>,
    freqs: Arc<RwLock<[f32; 21]>>,
    audio_file: PathBuf,
) -> AnyResult<()> {
    let mut planner: FftPlanner<f32> = FftPlanner::new();
    let mut s = [Complex {
        re: 0.0f32,
        im: 0.0f32,
    }; 1470];
    let decoder = rodio::decoder::Decoder::new_wav(BufReader::new(File::open(audio_file)?))?
        .buffered()
        .periodic_access(Duration::try_from_secs_f32(1.0 / 30.0)?, move |x| {
            let fft = planner.plan_fft_forward(21);
            let mx = x.clone();
            for (idx, v) in mx.take(1470).enumerate() {
                s[idx] = (v as f32).into();
            }
            fft.process(&mut s);
            {
                // s.into_iter().enumerate().map(|(i, x)| f[i] = x.re());
                for (i, x) in s.into_iter().take(21).enumerate() {
                    let mut f = freqs.write().unwrap();
                    f[i] = x.re();
                }
            }
            let mut y = lvl.write().unwrap();
            *y = s[0].re();
        });
    let output_stream = rodio::OutputStream::try_default()?;
    let _ = output_stream.1.play_raw(decoder.convert_samples());
    loop {
        let c = close.try_read();
        if let Ok(c) = c {
            if *c {
                break;
            } else {
                continue;
            }
        }
    }
    Ok(())
}
