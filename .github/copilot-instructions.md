# Rules

## Coding Pattern Preferences

- Always prefer simple solutions.
- Avoid code duplication; check for existing similar functionality before adding new code.
- Write code considering different environments: development, testing, and production.
- Any mayor decision like selecting a technology stack to use or technology comonent to use, needs to be consulted prior to moving forward. You DO NOT take that kind of decidion lightly and will always consult before implementing a mayor enhancement based on technology selection. Example: Selecting MongoDB over Casandra. Or selecting Vue over React.
- Make changes only when requested or when confident they are necessary and well-understood.
- When fixing issues, avoid introducing new patterns or technologies without first exhausting existing implementation options. If new implementations are added, ensure old ones are removed to prevent duplicate logic.
- Maintain a clean and organized codebase. Ensure to clean any leftovers after implmenting any new code.
- Avoid writing scripts in files, especially if they are intended for one-time use.
- Refactor files exceeding 200–300 lines of code.
- Use data mocking exclusively for tests; avoid mocking data in development or production environments.
- Do not overwrite the `.env` file without prior confirmation.
- Be mindful of the UI changes I do and don't revert them when making any future modifications. If you need any additional information regarding the chnages, please ask before making any modifications or changes. If you see something weird in the code, changes that may be caused by a typo or changes that may be out of place work within my current UI design and ensure you preserve my customizations.
- When I ask you to implment a Docker solution, analyze the Pros and Cons first and find out if the solution does make sense or not. Some solutions may not require a Docker container and may add more complexity to the project.

## Behavioral Guidelines & Interaction Style

- **Precision & Clarity:** Deliver concise, targeted code edits (diffs). Explain reasoning briefly _only_ when necessary or requested. Structure responses logically.
- **Proactive Assistance:** Suggest relevant improvements/alternatives or anticipate potential issues. Ask clarifying questions promptly if requests are ambiguous.
- **Contextual Adaptation:** Adjust detail level to user expertise and current session context (recent interactions, files, stated goals).
- **Reliability & Collaboration:** Operate transparently: state limitations, adhere strictly to all defined rules (`@agent_protocol.mdc`, `@git_workflow_rules.mdc`, etc.), and _always_ require explicit user confirmation (e.g., via runnable command blocks) for significant or potentially destructive actions (commits, file system changes, major decisions).
- **Propose Learning Documentation (`\l`):** At logical conclusion points of a task – particularly after successfully resolving a complex bug, implementing a significant feature based on iterative feedback/corrections, or when a notable pattern/pitfall was identified and overcome – _propose_ to the user that key learnings could be documented.
- **Suggestion Format:** Phrase this as a suggestion, e.g., "This task involved overcoming [specific challenge]. Would you like to summarize the key learnings using the `\l` command?"
- **Do Not Execute:** Do not attempt to generate or run the `\l` command itself. The suggestion prompts the _user_ to invoke it if they agree.
- **Git username:** Use `julianpinedayyz` for all git operations. This includes commits, branches, and any other git-related tasks.

## Running Terminal Commands

- Avoid newline characters in commit messages, long strings, etc. They break out automated terminal tool. Newline characters are not allowed

## Git commit rules

When asked for 'generate commit', you will generate a commit message for each change that happen in each file. the command should look something like this:

```
git add "custom-instructions.md" && git commit -m "docs: add coding pattern preferences" -m "- Document code simplicity preference - Add guidelines for code organization - Include environment handling rules - Specify file size limitations - Add rules for test data vs production data"
```

Use the above as a template. Commits can be categorized as: docs, patch, fix, refactor, feat, chore, enh, a11y, i18n.
IMPORTANT: When using auto-run mode, DO NOT commit changes automatically. Always ask before commiting changes.
