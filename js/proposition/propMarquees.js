export const propMarquees = () => {

gsap.registerPlugin(ScrollTrigger, Observer);

function horizontalLoop(items, config) {
	items = gsap.utils.toArray(items);
	config = config || {};
	let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
		length = items.length,
		startX = items[0].offsetLeft,
		times = [],
		widths = [],
		xPercents = [],
		curIndex = 0,
		pixelsPerSecond = (config.speed || 1) * 100,
		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		totalWidth, curX, distanceToStart, distanceToLoop, item, i;
	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
		xPercent: (i, el) => {
			let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
			xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
			return xPercents[i];
		}
	});
	gsap.set(items, {x: 0});
	totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
	for (i = 0; i < length; i++) {
		item = items[i];
		curX = xPercents[i] / 100 * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
		  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
		  .add("label" + i, distanceToStart / pixelsPerSecond);
		times[i] = distanceToStart / pixelsPerSecond;
	}
	function toIndex(index, vars) {
		vars = vars || {};
		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
		let newIndex = gsap.utils.wrap(0, length, index),
			time = times[newIndex];
		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}
		curIndex = newIndex;
		vars.overwrite = true;
		return tl.tweenTo(time, vars);
	}
	tl.next = vars => toIndex(curIndex+1, vars);
	tl.previous = vars => toIndex(curIndex-1, vars);
	tl.current = () => curIndex;
	tl.toIndex = (index, vars) => toIndex(index, vars);
	tl.times = times;
	tl.progress(1, true).progress(0, true); // pre-render for performance
	if (config.reversed) {
	  tl.vars.onReverseComplete();
	  tl.reverse();
	}
	return tl;
}

const infoMarquee = gsap.utils.toArray(".marquee__items.is--info");
const carteMarquee = gsap.utils.toArray(".marquee__items.is--carte");
const blancheMarquee = gsap.utils.toArray(".marquee__items.is--blanche");
const rebMarquee = gsap.utils.toArray(".marquee__items.is--reb");
const sizeMarquee = gsap.utils.toArray(".marquee__items.is--size");
const spaMarquee = gsap.utils.toArray(".marquee__items.is--spa");
const dayMarquee = gsap.utils.toArray(".marquee__items.is--day");
const readyMarquee = gsap.utils.toArray(".marquee__items.is--ready");

const loopInfo = horizontalLoop(infoMarquee, {repeat: -1, speed: 0.2, paused: true});
const loopCarte = horizontalLoop(carteMarquee, {repeat: -1, speed: 0.6, paused: true});
const loopBlanche = horizontalLoop(blancheMarquee, {repeat: -1, speed: 0.4, paused: true});
const loopReb = horizontalLoop(rebMarquee, {repeat: -1, speed: 0.6, paused: true});
const loopSize = horizontalLoop(sizeMarquee, {repeat: -1, speed: 0.4, paused: true});
const loopSpa = horizontalLoop(spaMarquee, {repeat: -1, speed: 0.6, paused: true});
const loopDay = horizontalLoop(dayMarquee, {repeat: -1, speed: 0.4, paused: true});
const loopReady = horizontalLoop(readyMarquee, {repeat: -1, speed: 0.4, paused: true});

ScrollTrigger.create({
  trigger: ".hero__container",
  onEnter: () => loopInfo.play(),
  onLeave: () => loopInfo.pause(),
  onEnterBack: () => loopInfo.play(),
  onLeaveBack: () => loopInfo.pause()
});

ScrollTrigger.create({
    trigger: ".is--cb-intro",
    onEnter: () => loopCarte.play(),
    onLeave: () => loopCarte.pause(),
    onEnterBack: () => loopCarte.play(),
    onLeaveBack: () => loopCarte.pause()
  });

  ScrollTrigger.create({
    trigger: ".is--cb-intro",
    onEnter: () => loopBlanche.play(),
    onLeave: () => loopBlanche.pause(),
    onEnterBack: () => loopBlanche.play(),
    onLeaveBack: () => loopBlanche.pause()
  });

ScrollTrigger.create({
    trigger: ".is--rebellion-intro",
    onEnter: () => loopReb.play(),
    onLeave: () => loopReb.pause(),
    onEnterBack: () => loopReb.play(),
    onLeaveBack: () => loopReb.pause()
  });

  ScrollTrigger.create({
    trigger: ".is--rebellion-intro",
    onEnter: () => loopSize.play(),
    onLeave: () => loopSize.pause(),
    onEnterBack: () => loopSize.play(),
    onLeaveBack: () => loopSize.pause()
  });

  ScrollTrigger.create({
    trigger: ".container.is--spa-intro",
    onEnter: () => loopSpa.play(),
    onLeave: () => loopSpa.pause(),
    onEnterBack: () => loopSpa.play(),
    onLeaveBack: () => loopSpa.pause()
  });

  ScrollTrigger.create({
    trigger: ".container.is--spa-intro",
    onEnter: () => loopDay.play(),
    onLeave: () => loopDay.pause(),
    onEnterBack: () => loopDay.play(),
    onLeaveBack: () => loopDay.pause()
  });

ScrollTrigger.create({
  trigger: ".headline__wrap.is--quiz",
  onEnter: () => loopReady.play(),
  onLeave: () => loopReady.pause(),
  onEnterBack: () => loopReady.play(),
  onLeaveBack: () => loopReady.pause()
});

Observer.create({
	onChangeY(self) {
	  let factor = 2;
	  if (self.deltaY < 0) {
		factor *= 1;
	  } 
	  gsap.timeline({ 
		defaults: {
		  ease: "none",
		}
	  })
		.to([loopCarte, loopBlanche, loopReb, loopSize, loopSpa, loopDay], { timeScale: factor * 3, duration: 0.6 })
		.to([loopCarte, loopBlanche, loopReb, loopSize, loopSpa, loopDay], { timeScale: factor / 3, duration: 1 }, "<");
	}
  });

Observer.create({
  onChangeY(self) {
    let factor = 3;
    if (self.deltaY < 0) {
      factor *= 1;
    } 
    gsap.timeline({ 
      defaults: {
        ease: "none",
      }
    })
      .to(loopReady, { timeScale: factor * 3, duration: 0.2 })
      .to(loopReady, { timeScale: factor / 3, duration: 0.4 }, "<");
  }
});

}
