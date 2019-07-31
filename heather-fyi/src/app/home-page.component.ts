import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [],
})
export class HomePage {
	seeMoreEducation = false;
	seeMoreExperience = false;

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
		},
		{
			title: 'Engineering Practicum Intern (Year II)',
			company: 'Google, Inc.',
			date: 'May - Aug 2018',
			location: 'Seattle, WA',
			description: 'Worked on Android Messages for Web to design multiple new features including an updated sticker widget an an emoji autocorrect feature. Worked heavily with Javascript and an internal components framework. Also learned the basics of Angular towards the end of the of the internship.'
		}
	];

	moreExperience = [
		{
			title: 'Galipatia Living-Learning Community Mentor and Academic Committee Member',
			company: 'Virginia Tech',
			date: 'Aug 2017 - May 2018',
			location: 'Blacksburg, VA',
			description: 'Mentored female first-year engineering students for 10 weeks, guiding them through their initial troubles at Virginia Tech. After that, I was a part of the Academic Planning Committee to create study sessions and other academic-related events.'
		},
		{
			title: 'Engineering Practicum Intern (Year I)',
			company: 'Google, Inc.',
			date: 'May - Aug 2017',
			location: 'Chicago, IL',
			description: 'Worked with the Search UI Infrastructure team at Google Chicago in order to create an experiment that provided cache overflow analytics for a select percentage of users. By providing this information, different teams were then able to modify the amount of storage they use in the cache. Also, I learned how to interact with a large pre-existing codebase and modify it to fit our needs without making the system susceptible to damage.'
		}
	];
}
