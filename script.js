class Sparks extends mojs.CustomShape {
  getShape() {return '<path d="M74,31.5 c0,0-8.9-12-37.5-12S1,31.5,1,31.5"/>';}}

mojs.addShape('sparks', Sparks);



const nSwitch = document.querySelector('.n-switch');
const nSwitchWrapper = document.querySelector('.n-switch__wrapper');
const screen = document.querySelector('.screen__wrapper');
const joyconLeft = document.querySelector('.joycon--left');
const joyconRight = document.querySelector('.joycon--right');
const rectRed = document.querySelector('.rect--red');
const rectBlue = document.querySelector('.rect--blue');
const rectBlack = document.querySelector('.rect--black');

const timeline = new mojs.Timeline({ speed: 1, delay: 50 });
const timeline2 = new mojs.Timeline({ speed: 1, delay: 500 });
const timelineMaster = new mojs.Timeline({ speed: 1, repeat: 999 });






const screenAnim1 = new mojs.Html({
  el: screen,
  y: { 800: 0, duration: 2000, easing: 'expo.inout' },
  scaleY: { 1.1: 1, duration: 1800, curve: 'M0, 100 C0, 100 25.265952727015524, -9.988635655345929 50, -10 C74.73404727298447, -10.011364344654075 100, 0 100, 0 ' },
  isShowStart: true,
  isForce3d: true });



const screenAnim2 = new mojs.Html({
  el: nSwitchWrapper,
  angleZ: { 5: 0, duration: 1500, delay: 1800, curve: 'M0, 100 C0, 100 10, 0 10, 0 C10, 0 13.142857142857146, 100.57142857142854 70, 100 C126.85714285714286, 99.42857142857149 100, 100 100, 100 ' },
  isShowStart: true,
  isForce3d: true });



const screenAnim3 = new mojs.Html({
  el: nSwitchWrapper,
  angleZ: { 360: 0, duration: 1200, delay: 2350, curve: 'M0, 0 C0, 0 20.00803116702666, 90.97486981612458 50, 100 C81.13482597583048, 107.0251301838754 100, 100 100, 100 ' },
  isShowStart: true,
  isForce3d: true });



const screenAnim4 = new mojs.Html({
  el: nSwitchWrapper,
  y: { 0: 800, duration: 1500, delay: 3500, easing: 'expo.inout' },
  scaleY: { 1: 1, duration: 1400, delay: 3800, curve: 'M0, 0 C0, 0 50, -22.285714285714285 50, -22.285714285714285 C50, -22.285714285714285 100, 0 100, 0 ' },
  isShowStart: true,
  isForce3d: true });






const joyConLeftAnim1 = new mojs.Html({
  el: joyconLeft,
  opacity: { 0: 1, duration: 100, delay: 2150, easing: 'expo.inout' },
  scale: { 0.9: 1, duration: 650, delay: 2000, easing: 'expo.inout' },
  y: { "-300": 0, duration: 650, delay: 2150, curve: 'M0, 0 C0, 0 16.61276026876357, 78.04133169733505 35, 95 C65.95866830266502, 104.81581115980781 100, 100 100, 100 ' },
  isShowStart: true,
  isForce3d: true });




const joyConRightAnim1 = new mojs.Html({
  el: joyconRight,
  opacity: { 0: 1, duration: 100, delay: 1600, easing: 'expo.inout' },
  scale: { 0.9: 1, duration: 600, delay: 1300, easing: 'expo.inout' },
  y: { "-200": 0, duration: 800, delay: 1600, curve: 'M0, 0 C0, 0 16.61276026876357, 78.04133169733505 35, 95 C65.95866830266502, 104.81581115980781 100, 100 100, 100 ' },
  isShowStart: true,
  isForce3d: true });




const spark1 = new mojs.Shape({
  shape: 'sparks',
  parent: nSwitch,
  radius: 25,
  fill: 'none',
  delay: 2400,
  strokeWidth: { 5: 0 },
  stroke: 'white',
  strokeDasharray: '100%',
  strokeDashoffset: { '100%': '-100%' },
  duration: 800,
  easing: 'cubic.out',
  strokeLinecap: 'round',
  isForce3d: true,
  left: '0%',
  top: '95%',
  angle: -130 });


const spark2 = new mojs.Shape({
  shape: 'sparks',
  parent: nSwitch,
  radius: 25,
  fill: 'none',
  delay: 2400,
  strokeWidth: { 5: 0 },
  stroke: 'white',
  strokeDasharray: '100%',
  strokeDashoffset: { '100%': '-100%' },
  duration: 800,
  easing: 'cubic.out',
  strokeLinecap: 'round',
  isForce3d: true,
  left: '100%',
  top: '5%',
  angle: 55 });




const curveLine1 = new mojs.Burst({
  left: "100%", top: "100%",
  degree: 180,
  parent: nSwitch,
  angle: 45,
  radius: { 0: 20 },
  count: 4,
  className: 'clickright',
  children: {
    shape: 'line',
    radius: 3,
    delay: 1850,
    radiusY: 0,
    scale: 0.8,
    stroke: '#ffffff',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    duration: 200,
    easing: 'quad.out' } });





const curveLine2 = new mojs.Burst({
  left: "0", top: "100%",
  parent: nSwitch,
  degree: 180,
  angle: -225,
  radius: { 0: 100 },
  count: 4,
  className: 'clickleft',
  children: {
    shape: 'line',
    radius: 3,
    delay: 2350,
    radiusY: 0,
    scale: 0.8,
    stroke: '#ffffff',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    duration: 800,
    easing: 'quad.out' } });







timeline.
add(
spark1,
spark2,
curveLine1,
curveLine2,
screenAnim1,
screenAnim2,
screenAnim3,
screenAnim4,
joyConRightAnim1,
joyConLeftAnim1);




const rectBlueAnim1 = new mojs.Html({
  el: rectBlue,
  isShowStart: false,
  isForce3d: true,
  y: { "100%": "0%", duration: 900, easing: 'expo.out' } }).
then({
  y: { "0%": "100%", delay: 2800, duration: 500, easing: 'expo.in' } });


const rectRedAnim1 = new mojs.Html({
  el: rectRed,
  isShowStart: false,
  isForce3d: true,
  y: { "100%": "0%", duration: 700, delay: 200, easing: 'expo.out' } }).
then({
  y: { "0%": "100%", delay: 2700, duration: 500, easing: 'expo.in' } });



const rectBlackAnim1 = new mojs.Html({
  el: rectBlack,
  isShowStart: false,
  isForce3d: true,
  y: { "100%": "0%", duration: 500, delay: 350, easing: 'expo.out' } }).
then({
  y: { "0%": "100%", delay: 2500, duration: 600, easing: 'expo.in' } });



timeline2.add(
rectBlueAnim1,
rectRedAnim1,
rectBlackAnim1);


timelineMaster.add(timeline, timeline2).play();