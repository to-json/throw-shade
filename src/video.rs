use std::result::Result::Ok;
use std::{
    path::Path,
    sync::{Arc, RwLock},
};

use anyhow::{anyhow, Result as AnyResult};
use raylib::prelude::*;

use raylib::texture::RenderTexture2D;

pub fn display(
    close: Arc<RwLock<bool>>,
    lvl: Arc<RwLock<f32>>,
    freqs: Arc<RwLock<[f32; 21]>>,
    shader: &Path,
) -> AnyResult<()> {
    let (w, h) = (1280, 900);
    let name = "throw-shade";
    let (mut rl, thread) = raylib::init().size(w, h).title(name).build();
    rl.set_target_fps(30);
    let mut target: RenderTexture2D = rl
        .load_render_texture(&thread, w.try_into()?, h.try_into()?)
        .map_err(|err| anyhow!(err))?;

    let shader_filename = shader.to_str().unwrap();
    let mut fshader = rl
        .load_shader(&thread, None, Some(shader_filename))
        .map_err(|err| anyhow!(err))?;
    let white = raylib::color::rcolor(255, 255, 255, 255);
    let mut time = 0.0;
    let mut mouse_loc = fshader.get_shader_location("mousePos");
    let mut time_loc = fshader.get_shader_location("time");
    let mut lvl_loc = fshader.get_shader_location("lvl");
    let mut freq_loc1 = fshader.get_shader_location("freqs1");
    let mut freq_loc2 = fshader.get_shader_location("freqs2");
    let mut freq_loc3 = fshader.get_shader_location("freqs3");
    let mut freq_loc4 = fshader.get_shader_location("freqs4");
    let mut freq_loc5 = fshader.get_shader_location("freqs5");

    while !rl.window_should_close() {
        if time % 20.0 == 0.0 {
            fshader = rl
                .load_shader(&thread, None, Some(shader_filename))
                .map_err(|err| anyhow!(err))?;
            mouse_loc = fshader.get_shader_location("mousePos");
            time_loc = fshader.get_shader_location("time");
            lvl_loc = fshader.get_shader_location("lvl");
            freq_loc1 = fshader.get_shader_location("freqs1");
            freq_loc2 = fshader.get_shader_location("freqs2");
            freq_loc3 = fshader.get_shader_location("freqs3");
            freq_loc4 = fshader.get_shader_location("freqs4");
            freq_loc5 = fshader.get_shader_location("freqs5");
        }
        let mx = rl.get_mouse_x() as f32 / w as f32;
        let my = rl.get_mouse_y() as f32 / h as f32;
        let mouse_pos = Vector2 { x: mx, y: my };
        {
            let ilvl = lvl.read().unwrap().as_f32();
            fshader.set_shader_value(lvl_loc, ilvl);
        }
        {
            let iifreq = freqs.read().unwrap();
            fshader.set_shader_value(
                freq_loc1,
                Vector4 {
                    x: iifreq[0],
                    y: iifreq[1],
                    z: iifreq[2],
                    w: iifreq[3],
                },
            );
            fshader.set_shader_value(
                freq_loc2,
                Vector4 {
                    x: iifreq[4],
                    y: iifreq[5],
                    z: iifreq[6],
                    w: iifreq[7],
                },
            );
            fshader.set_shader_value(
                freq_loc3,
                Vector4 {
                    x: iifreq[8],
                    y: iifreq[9],
                    z: iifreq[10],
                    w: iifreq[11],
                },
            );
            fshader.set_shader_value(
                freq_loc4,
                Vector4 {
                    x: iifreq[12],
                    y: iifreq[13],
                    z: iifreq[14],
                    w: iifreq[15],
                },
            );
            fshader.set_shader_value(
                freq_loc5,
                Vector4 {
                    x: iifreq[16],
                    y: iifreq[17],
                    z: iifreq[18],
                    w: iifreq[19],
                },
            );
        }
        fshader.set_shader_value(mouse_loc, mouse_pos);
        fshader.set_shader_value(time_loc, time);
        let mut d = rl.begin_drawing(&thread);
        d.clear_background(white);
        {
            let mut mode = d.begin_texture_mode(&thread, &mut target);
            mode.draw_rectangle(0, 0, w, -h, white);
        }
        {
            let mut mode = d.begin_shader_mode(&fshader);
            mode.draw_texture_rec(
                target.texture(),
                Rectangle {
                    x: 0.0,
                    y: 0.0,
                    width: target.texture().width as f32,
                    height: -target.texture.height as f32,
                },
                Vector2 { x: 0.0, y: 0.0 },
                color::rcolor(255, 255, 255, 255),
            );
        }
        time += 1.0;
    }
    let mut c = close.write().unwrap();
    *c = true;
    Ok(())
}
