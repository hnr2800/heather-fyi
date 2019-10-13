import { Component } from '@angular/core';

@Component({
  selector: 'social-page',
  templateUrl: './social-page.component.html',
  styleUrls: [],
})
export class SocialPage {
	socials = [
		{
			title: 'Email Me',
			link: 'mailto:heatherrobinson920@gmail.com',
			img: 'assets/email.svg'
		},
		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/heathernrobinson/',
			img: 'assets/linkedin.svg'
		},
		{
			title: 'Twitter',
			link: 'https://twitter.com/spookypoodles',
			img: 'assets/twitter.svg'
		},
		{
			title: 'Instagram (Personal)',
			link: 'https://www.instagram.com/spookypoodles/',
			img: 'assets/instagram.svg'
		},
		{
			title: 'Instagram (Art)',
			link: 'https://www.instagram.com/virgo.stitch/',
			img: 'assets/instagram.svg'
		},
		{
			title: 'Facebook',
			link: 'https://www.facebook.com/hnr2800',
			img: 'assets/facebook.svg'
		}
	]
}