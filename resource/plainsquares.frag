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
    if (fragTexCoord.y<0.25 ){
      FragColor = vec4(freqs1.xxx, 1.0 );
    } else if (fragTexCoord.y<0.50 ) {
      FragColor = vec4(freqs1.yyy, 1.0);
    } else if (fragTexCoord.y<0.75 ) {
      FragColor = vec4(freqs1.zzz, 1.0);
    } else {
      FragColor = vec4(freqs1.www, 1.0);
    };
  } else if ((fragTexCoord.x > 0.2) && (fragTexCoord.x < 0.4)) {
    if (fragTexCoord.y<0.25 ){
      FragColor = vec4(freqs2.xxx, 1.0);
    } else if (fragTexCoord.y<0.50 ) {
      FragColor = vec4(freqs2.yyy, 1.0);
    } else if (fragTexCoord.y<0.75 ) {
      FragColor = vec4(freqs2.zzz, 1.0);
    } else {
      FragColor = vec4(freqs2.www, 1.0);
    };
  } else if ((fragTexCoord.x > 0.4) && (fragTexCoord.x < 0.6)) {
    if (fragTexCoord.y<0.25 ){
      FragColor = vec4(freqs3.xxx, 1.0);
    } else if (fragTexCoord.y<0.50 ) {
      FragColor = vec4(freqs3.yyy, 1.0);
    } else if (fragTexCoord.y<0.75 ) {
      FragColor = vec4(freqs3.zzz, 1.0);
    } else {
      FragColor = vec4(freqs3.www, 1.0);
    };
  } else if ((fragTexCoord.x > 0.6) && (fragTexCoord.x < 0.8)) {
    if (fragTexCoord.y<0.25 ){
      FragColor = vec4(freqs4.xxx, 1.0);
    } else if (fragTexCoord.y<0.50 ) {
      FragColor = vec4(freqs4.yyy, 1.0);
    } else if (fragTexCoord.y<0.75 ) {
      FragColor = vec4(freqs4.zzz, 1.0);
    } else {
      FragColor = vec4(freqs4.www, 1.0);
    };
  } else {
    if (fragTexCoord.y<0.25 ){
      FragColor = vec4(freqs5.xxx, 1.0);
    } else if (fragTexCoord.y<0.50 ) {
      FragColor = vec4(freqs5.yyy, 1.0);
    } else if (fragTexCoord.y<0.75 ) {
      FragColor = vec4(freqs5.zzz, 1.0);
    } else {
      FragColor = vec4(freqs5.www, 1.0);
    };
  };
  // FragColor = vec4(freqs1.x ,freqs2.y,freqs3.z,freqs4.w);
}
