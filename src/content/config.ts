import { defineCollection, reference, type SchemaContext } from "astro:content"
import { z } from "astro:schema"
import { file } from "astro/loaders"

const authorSchema = ({ image }: SchemaContext) =>
	z.object({
		wpId: z.number(),
		name: z.string(),
		url: z.string().optional(),
		description: z.string().optional(),
		link: z.string().url().optional(),
		slug: z.string().optional(),
		logo: image().optional(),
		avatar_urls: z
			.object({
				24: z.string().url(),
				48: z.string().url(),
				96: z.string().url()
			})
			.optional()
	})

const employmentTypeSchema = z.object({
	id: z.number(),
	count: z.number(),
	name: z.string(),
	description: z.string().optional(),
	link: z.string().url().optional(),
	slug: z.string().optional()
})

const experienceSchema = z.object({
	id: z.number(),
	count: z.number(),
	name: z.string(),
	description: z.string().optional(),
	link: z.string().url().optional(),
	slug: z.string().optional()
})

const industrySchema = z.object({
	id: z.number(),
	count: z.number(),
	name: z.string(),
	description: z.string().optional(),
	link: z.string().url().optional(),
	slug: z.string().optional()
})

const locationSchema = z.object({
	id: z.number(),
	count: z.number(),
	name: z.string(),
	description: z.string().optional(),
	link: z.string().url().optional(),
	slug: z.string().optional()
})

export const jobSchema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string().optional(),
		draft: z.boolean().default(false).optional(),
		type: z.string(),
		createdAt: z.coerce.date(),
		modifiedAt: z.coerce.date(),
		author: reference("authors").optional(),
		industry: z.array(reference("industry")).optional(),
		location: z.array(reference("location")).optional(),
		experience: z.array(reference("experience")).optional(),
		employmentType: z.array(reference("employment-type")).optional()
	})

export const navMainSchema = ({ image }: SchemaContext) =>
	z.object({
		id: z.string(),
		label: z.string(),
		url: z.string(),
		content: z.object({
			title: z.string(),
			text: z.string(),
			cta: z.object({
				label: z.string(),
				url: z.string()
			})
		}),
		subLinks: z.array(
			z.object({
				label: z.string(),
				url: z.string(),
				content: z.object({
					icon: z.string().optional(),
					logo: image().optional(),
					text: z.string(),
					cta: z.object({
						label: z.string(),
						url: z.string()
					}),
					image: image()
				})
			})
		)
	})

const authorsCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: authorSchema
})

const jobCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: jobSchema
})

const employmentTypeCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: employmentTypeSchema
})

const experienceCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: experienceSchema
})

const industryCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: industrySchema
})

const locationCollection = defineCollection({
	type: "data", // v2.5.0 and later
	schema: locationSchema
})

const navMainCollection = defineCollection({
	type: "content_layer",
	loader: file("src/data/nav-main.json"),
	schema: navMainSchema
})

export const collections = {
	authors: authorsCollection,
	job: jobCollection,
	"employment-type": employmentTypeCollection,
	experience: experienceCollection,
	industry: industryCollection,
	location: locationCollection,
	"nav-main": navMainCollection
}
