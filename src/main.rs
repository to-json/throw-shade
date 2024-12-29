// #![allow(unused)]
use std::{
    path::Path,
    sync::{Arc, RwLock},
    thread,
};

use anyhow::{anyhow, Result as AnyResult};

use std::path::PathBuf;

use clap::Parser;
mod audio;
mod video;

#[derive(Parser)]
#[command(version, about, long_about = None)]
struct Cli {
    /// Sets a fragment shader
    #[arg(short, long, value_name = "SHADER")]
    fs: Option<PathBuf>,

    /// Sets an audio file to load
    #[arg(short, long, value_name = "SOUND")]
    sound: Option<PathBuf>,

    /// Sets window width
    #[arg(short, long, value_name = "X")]
    x: Option<i32>,

    /// Sets window height
    #[arg(short, long, value_name = "Y")]
    y: Option<i32>,
}

fn main() -> AnyResult<()> {
    let cli = Cli::parse();

    let fs: &Path;
    let af: PathBuf;
    let mut width: i32 = 1200;
    let mut height: i32 = 800;
    if let Some(fragment_shader) = cli.fs.as_deref() {
        fs = fragment_shader;
        println!("Value for config: {}", fragment_shader.display());
    } else {
        return Err(anyhow!("Need a fragment shader"));
    }
    if let Some(audio_file) = cli.sound.as_deref() {
        af = audio_file.to_path_buf();
        println!("Value for config: {}", audio_file.display());
    } else {
        return Err(anyhow!("Need an audio file"));
    }
    if let Some(w) = cli.x {
        width = w
    }
    if let Some(h) = cli.y {
        height = h
    }

    let close = Arc::new(RwLock::new(false));
    let close_reader = Arc::clone(&close);
    let lvl = Arc::new(RwLock::new(0.0));
    let freqs = Arc::new(RwLock::new([0.0; 21]));
    let lvl_reader = Arc::clone(&lvl);
    let freq_reader = Arc::clone(&freqs);
    let at = thread::spawn(|| audio::play(close_reader, lvl, freqs, af));
    let _rhandle = video::display(close, width, height, lvl_reader, freq_reader, fs);
    let _ahandle = at.join();
    Ok(())
}
