type HrefifyProps = {
	title: string;
	link: string;
	child: string;
	className?: string;
};

export const hrefify = ({ title, link, child, className }: HrefifyProps) =>
	`<a href='${link}'
		class="on-hover-animation underline ${className ?? ''}" title="${title}">
		${child}
	</a>`;

type HrefifyProjectLinks = {
	website?: {
		title: string;
		link: string;
		child: string;
	};
	github?: {
		title: string;
		link: string;
		child: string;
	};
	className?: string;
};

export const hrefifyProjects = ({ website, github, className }: HrefifyProjectLinks) => {
	const lines: string[] = [];

	if (website) {
		lines.push(
			`<span class="font-semibold">Website:</span> ${hrefify({
				title: website.title,
				link: website.link,
				child: website.child,
                className: `hover:ml-1 ${className}`
			})}`
		);
	}

	if (github) {
		lines.push(
			`<span class="font-semibold">Github:</span> ${hrefify({
				title: github.title,
				link: github.link,
				child: github.child,
                className: `mt-1 hover:ml-1 ${className}`
			})}`
		);
	}

	return lines.join('<br />');
};