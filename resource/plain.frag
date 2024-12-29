#version 330 core
#define hash(x) fract(sin(x) * 43758.5453123)
out vec4 FragColor;
in vec2 fragTexCoord;
in vec4 fragColor;
// Input uniform values
uniform vec2 mousePos;
uniform float time;
uniform float lvl;
uniform vec4 freqs1;
uniform vec4 freqs2;
uniform vec4 freqs3;
uniform vec4 freqs4;
uniform vec4 freqs5;

void main() {
  if (fragTexCoord.x < 0.2)
  {
    if (fragTexCoord.x<0.050 ){
      if (fragTexCoord.y < freqs1.x/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.1 ) {
      if (fragTexCoord.y < freqs1.y/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.15 ) {
      if (fragTexCoord.y < freqs1.z/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else {
      if (fragTexCoord.y < freqs1.w/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    };
  } else if ((fragTexCoord.x > 0.2) && (fragTexCoord.x < 0.4)) {
    if (fragTexCoord.x<0.25 ){
      if (fragTexCoord.y < freqs2.x/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.3 ) {
      if (fragTexCoord.y < freqs2.y/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.35 ) {
      if (fragTexCoord.y < freqs2.z/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else {
      if (fragTexCoord.y < freqs2.w/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    };
  } else if ((fragTexCoord.x > 0.4) && (fragTexCoord.x < 0.6)) {
    if (fragTexCoord.x<0.45 ){
      if (fragTexCoord.y < freqs3.x/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.50 ) {
      if (fragTexCoord.y < freqs3.y/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.55 ) {
      if (fragTexCoord.y < freqs3.z/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else {
      if (fragTexCoord.y < freqs3.w/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    };
  } else if ((fragTexCoord.x > 0.6) && (fragTexCoord.x < 0.8)) {
    if (fragTexCoord.x<0.65 ){
      if (fragTexCoord.y < freqs4.x/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.70 ) {
      if (fragTexCoord.y < freqs4.y/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.75 ) {
      if (fragTexCoord.y < freqs4.z/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else {
      if (fragTexCoord.y < freqs4.w/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    };
  } else {
    if (fragTexCoord.x<0.85 ){
      if (fragTexCoord.y < freqs5.x/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.90 ) {
      if (fragTexCoord.y < freqs5.y/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else if (fragTexCoord.x<0.95 ) {
      if (fragTexCoord.y < freqs5.z/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    } else {
      if (fragTexCoord.y < freqs5.w/2000.0) {
        FragColor = vec4(1.0,1.0,1.0, 0.6);
      } else {
        FragColor = vec4(0.0,0.0,0.0, 0.6);
      }
    };
  };
  // FragColor = vec4(freqs1.x ,freqs2.y,freqs3.z,freqs4.w);
}
