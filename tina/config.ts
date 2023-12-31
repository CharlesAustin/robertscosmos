import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: 'global',
                label: 'Global',
                path: 'src/content/globals',
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                fields: [
                    {
                        type: "object",
                        name: "header",
                        label: "Header",
                        fields: [
                            {
                                type: "reference",
                                name: "mainNavigation",
                                label: "Main Navigation",
                                description: "Select a page",
                                ui: {
                                    component: "select",
                                    
                                },
                                collections: ["post"],
                            },
                        ]
                    },
                ],
            },
            {
                name: "post",
                label: "Posts",
                path: "src/content/posts",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "pubDate",
                        label: "Publication Date",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        list: true,
                        ui: {
                            component: 'tags',
                        }
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
            {
                name: "page",
                label: "Pages",
                path: "src/content/pages",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "boolean",
                        name: "inNavigation",
                        label: "Show in main navigation",
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
