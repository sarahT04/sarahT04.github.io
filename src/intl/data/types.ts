export type Experience = {
	date: string;
	title: string;
	organization: string;
	place: string;
	description: Array<string>;
	skills?: Array<string>;
};

export type DataBundle = {
	sidebarExperiences: Experience[];
	experiences: Experience[];
	projects: Experience[];
	organizations: Experience[];
	certificates: Experience[];
};
