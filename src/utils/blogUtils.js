import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug, locale) {
  let folder = "blog";
  if (locale === "it") {
    folder = "blog-it";
  } else if (locale === "de") {
    folder = "blog-de";
  }

  const text = await readFile(`./src/lib/${folder}/${slug}.md`, "utf8");
  const {
    content,
    data: { title, seo_title, seo_description, thumbnail },
  } = matter(text);
  const body = marked(content);
  return { slug, title, seo_title, seo_description, thumbnail, body };
}

export async function getSlugs(locale) {
  let folder = "blog";
  if (locale === "it") {
    folder = "blog-it";
  } else if (locale === "de") {
    folder = "blog-de";
  }

  const files = await readdir(`./src/lib/${folder}`);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}


export async function getPage(slug, locale) {
  let folder = "policies";
  if (locale === "it") {
    folder = "policies-it";
  } else if (locale === "de") {
    folder = "policies-de";
  }

  const text = await readFile(`./src/lib/${folder}/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, body };
}

export async function getPageSlugs() {
  const files = await readdir("./src/lib/policies/");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}