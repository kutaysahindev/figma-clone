# Figma Clone

A minimalistic Figma clone to demonstrate real-world features such as live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.

<p align="center">
  <img src="https://github.com/kutaysahindev/figma-clone/assets/79334889/0d80264a-72d3-4844-9a48-859f226812bb" alt="Screenshot">
</p>

## Live Demo
Check out the live demo [here](https://figma-clone-bay.vercel.app/).


## Tech Stack
- Next.js
- TypeScript
- Liveblocks
- Fabric.js
- Shadcn
- Tailwind CSS

## Features
- Multi Cursors, Cursor Chat, and Reactions: Enable multiple users to work together simultaneously by displaying individual cursors, facilitating live chat, and allowing reactions for interactive communication.
- Active Users: Provides a roster of presently engaged users within the collaborative environment, offering visibility into ongoing participation.
- Comment Bubbles: Empowers users to affix comments to specific canvas elements, fostering communication and feedback on design components.
- Creating Different Shapes: Equips users with tools to produce diverse shapes on the canvas, enabling varied design elements.
- Uploading Images: Incorporates the ability to import images onto the canvas, broadening the range of visual content available for design.
- Customization: Grants users the capability to fine-tune the properties of design elements, ensuring flexibility in customization.
- Freeform Drawing: Facilitates unrestricted drawing on the canvas, encouraging artistic expression and innovative design.
- Undo/Redo: Allows for the undo or redo of prior actions, facilitating flexibility in design decision-making.
- Keyboard Actions: Provides users with the option to employ keyboard shortcuts for a range of actions, enhancing efficiency and accessibility.
- History: Enables the review of the chronological sequence of actions and modifications made on the canvas, aiding in project management and version control.
- Deleting, Scaling, Moving, Clearing, Exporting Canvas: Offers various functions for managing design elements, including deletion, scaling, moving, clearing the canvas, and exporting the final design for external use.
- And numerous additional features, encompassing code architecture, advanced react hooks, and reusability.

## Quick Start
Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/kutaysahindev/figma-clone.git
cd figma-clone
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
```

Replace the placeholder values with your actual Liveblocks credentials. You can get these credentials by signing up on the [Liveblocks website](https://liveblocks.io).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

