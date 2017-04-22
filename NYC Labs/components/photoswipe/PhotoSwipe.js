var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var SweepBeat = [
    {
        src: 'assets/portfolio/app-screens/SweepBeat/1.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/SweepBeat/2.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/3.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/4.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/5.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/6.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/7.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/8.png',
        w: 750,
        h: 1334
    },
	{
        src: 'assets/portfolio/app-screens/SweepBeat/9.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/SweepBeat/10.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/SweepBeat/11.png',
        w: 750,
        h: 1334
    }
	
];

// build items array
var HubbMusic = [
    {
        src: 'assets/portfolio/app-screens/HubbMusic/HubbMusic1.jpg',
        w: 2000,
        h: 2000
    },
    {
        src: 'assets/portfolio/app-screens/HubbMusic/HubbMusic2.jpg',
        w: 1920,
        h: 1440
    },
    {
        src: 'assets/portfolio/app-screens/HubbMusic/HubbMusic3.jpg',
        w: 1920,
        h: 1440
    },
    {
        src: 'assets/portfolio/app-screens/HubbMusic/HubbMusic5.jpg',
        w: 1920,
        h: 1440
    },
    {
        src: 'assets/portfolio/app-screens/HubbMusic/HubbMusic6.jpg',
        w: 1920,
        h: 1440
    }
    
];

// build items array
var Rooted = [
    {
        src: 'assets/portfolio/app-screens/SweepBeat/1.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/SweepBeat/2.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/SweepBeat/3.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/SweepBeat/4.png',
        w: 750,
        h: 1334
    }
    
];

// build items array
var Chirp = [
    {
        src: 'assets/portfolio/app-screens/Chirp/1.png',
        w: 1692,
        h: 890
    },
    {
        src: 'assets/portfolio/app-screens/Chirp/2.png',
        w: 1024,
        h: 692
    }
    
];

// build items array
var lycnz = [
    {
        src: 'assets/portfolio/app-screens/LYCNZPL8Z/1.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/LYCNZPL8Z/2.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/LYCNZPL8Z/3.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/LYCNZPL8Z/4.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/LYCNZPL8Z/5.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/LYCNZPL8Z/6.png',
        w: 750,
        h: 1334
    }
    
];

// build items array
var FixIt = [
    {
        src: 'assets/portfolio/app-screens/Fixit/1.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/Fixit/2.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/Fixit/3.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/Fixit/4.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/Fixit/5.png',
        w: 750,
        h: 1334
    },
    {
        src: 'assets/portfolio/app-screens/Fixit/6.png',
        w: 750,
        h: 1334
    }
    
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
$("#SweepBeat-btn").click(function() {
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, SweepBeat, options);
	gallery.init();
});

$("#HubbMusic-btn").click(function() {
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, HubbMusic, options);
	gallery.init();
});

$("#HubbMusic-btn").click(function() {
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, HubbMusic, options);
    gallery.init();
});

$("#Rooted-btn").click(function() {
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, Rooted, options);
    gallery.init();
});

$("#Chirp-btn").click(function() {
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, Chirp, options);
    gallery.init();
});

$("#Lycnz-btn").click(function() {
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, lycnz, options);
    gallery.init();
});

$("#FixIt-btn").click(function() {
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, FixIt, options);
    gallery.init();
});