import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [],
})
export class HomePage {
	seeMoreEducation = false;

	skills = [
		'Typescript', 'Angular', 'Javascript', 'HTML / CSS', 'Python', 'Wiz', 'Soy', 'Java', 'C', 'LaTeX', 'SQL', 'Jekyll'
	];

	experience = [
		{
			title: 'Software Engineering Intern',
			company: 'Google, Inc.',
			date: 'May - Aug 2019',
			location: 'Sunnyvale, CA',
			description: 'Worked on an internal metrics team to design and implement a revamped version of an existing feature from the ground up. Worked closely with a UX Developer and made use of Google\'s Angular Material components. Gained experience in Angular and Typescript.'
		},
		{
			title: 'Student Web Developer',
			company: 'Virginia Tech University Libraries',
			date: 'Aug - Nov 2018',
			location: 'Blacksburg, VA',
			description: 'Student Web Developer at Virginia Tech University Libraries IT Services. Worked on lib.vt.edu (CMS) and spec.lib.vt.edu (Jekyll) to update to the new Virginia Tech content design standards and improve readability for an overall better user experience.'
		}
	]
}
