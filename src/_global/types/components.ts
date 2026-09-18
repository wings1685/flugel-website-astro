import type { HTMLAttributes } from "astro/types";

export type DivAttributes = HTMLAttributes<'div'>;
export type AsDiv = DivAttributes & {
	as?: 'div';
};
export type SectionAttributes = HTMLAttributes<'section'>;
export type AsSection = SectionAttributes & {
	as: 'section';
};

export type LinkAttributes = HTMLAttributes<'a'>;
export type AsLink = LinkAttributes & {
	as: 'a';
};

export type HAttributes = HTMLAttributes<'h1'> &
							HTMLAttributes<'h2'> &
							HTMLAttributes<'h3'> &
							HTMLAttributes<'h4'> &
							HTMLAttributes<'h5'> &
							HTMLAttributes<'h6'>;

export type ParagraphAttributes = HTMLAttributes<'p'>;

export type UListAttributes = HTMLAttributes<'ul'>;

export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';
export type Directions = 'left' | 'center' | 'right' | 'justify';
