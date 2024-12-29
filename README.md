# throw-shade

## why
because i was too curmudgeonly to understand any of the other perfectly
good ways to livecode a fragment shader with audio input, i had to make
one.

if what you want is a good shader livecoding environment i would suggest
[shader editor](https://play.google.com/store/apps/details?id=de.markusfisch.android.shadereditor&hl=en_US)
or maybe [kodelife](https://hexler.net/kodelife), but if you very specifically
want a unixy tool to simply watch a shader on disk and display it onscreen,
while simultaneously watching an audio source and feeding in uniforms, so that
you can use your usual editor to live code visualizaitons, this might be
useful to you.

## what

i think i just said that

## where

your computer! clone this repo and try:

    cargo run -- -f resource/plain.frag --sound resource/amen1.wav
or
    cargo run -- -h

## when

now, i guess? whenever you like, really.

## who

me! everything you need to know about me, you already know. well, and you!
everything you need to know about you, you also already know. maybe the people
you share it with too!

if you stream with it or something, link me! a valid github issue is "i
(streamed|will stream|performed|will perform) with throw-shade at <url|location>",
i am always happy to see such an issue.

## how

raylib has a load shader function, this just calls it a lot. it also plays
sound with rodio, because what i really wanted was an end result, not a learning
journey into dsp intricacies. that's next project.

## the fuuuuuture

idk dude every time i write one of these i don't end up doing that shit. but:

- more useful dsp things
- - my fft is real half-assed, and that could/should not be true
- - mfcc or something could be fun too
- a gui
- - mostly because other raylib projects will need one and learning rgui seems good
- - i tried egui but it doesn't pave opengl for me
- - i might try ripping out raylib and just rawdogging opengl instead, but, who tf knows
- mic input
- - this one will probably actually happen bc it's probably easy and i'm already doing it

## why post?

bc i'm using it now. i can just sit down and load a mix (really fucking long audio files are fine)
and just zone out. for a whiiiile. try it with a transparent editor on top of the throw-shade window.

## why throw-shade

bc it throws shaders onto the screen, because throwing shapes is a form of dance, because throwing
shade is a form of diss, because i think most things involved in audiovisual code outside the
demoscene are pretentious garbage and most of what goes on inside the demoscene is also pretentious,
just, not garbage, because when i asked my fingers for a name, that's what fell out.

## contributing

probably don't, this is for me. if you insist, make sure your patch is rustfmted, doesn't
introduce new deps without discussion, and that you're ready to be rejected for stupid reasons
anyway.

## license

modified wtfpl, as follows:

        DO WHAT THE FUCK YOU WANT TO (EXCEPT SUE OR HARM ME) PUBLIC LICENSE
                    Version idk, December 2024

 Copyright (C) 2024 me

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO (unless that would harm me or
  you want to sue me)
  1. HARM is defined as "I find it harmful"

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

