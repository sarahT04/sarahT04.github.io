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
