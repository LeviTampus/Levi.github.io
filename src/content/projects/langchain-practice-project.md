---
title: 'LangChain Practice Project'
type: 'learning'
tagline: 'A guided build where a small planetary Q&A assistant grows from a prompt template to RAG to tool calling.'
preview: 'Grows across five stages: a plain prompt, few-shot prompting, RAG over planet text files, and three callable tools. The pieces are split into small modules.'
technologies: ['Python', 'LangChain', 'Chroma', 'Groq', 'HuggingFace Embeddings', 'RAG', 'Tool Calling', 'Prompt Templates', 'LCEL / Runnables']
links: { repo: 'https://github.com/LeviTampus/langchain-practice-project' }
featured: false
order: 5
status: 'shipped'
---

## Why I built it

A guided learning project from Hyperskill's Introduction to LangChain. I wanted
to understand the parts of a LangChain app (prompting, retrieval, and tool
calling) by growing one small assistant stage by stage instead of just reading
about them.

## What it does

It answers questions about the planets, rebuilt and extended across five stages:
a plain prompt sent to a Groq chat model; few-shot prompting for structured
planet descriptions; RAG over a small set of planet text files; and three tools
the model can call (<code translate="no">PlanetDistanceSun</code>,
<code translate="no">PlanetRevolutionPeriod</code>, and
<code translate="no">PlanetGeneralInfo</code>) to look up facts on its own.

## How it's built

Python, growing one idea per stage. A <code translate="no">PromptTemplate</code>
piped into a Groq chat model, then a
<code translate="no">FewShotPromptTemplate</code> for structured planet
descriptions. Next, RAG over <code translate="no">planets/*.txt</code>: load,
embed with HuggingFace <code translate="no">all-MiniLM-L6-v2</code>, store in
Chroma, then <code translate="no">similarity_search</code>. Then three
<code translate="no">@tool</code> functions bound with
<code translate="no">bind_tools</code>, where the model routes each query to the
right tool. Finally, chain composition with <code translate="no">|</code>
(<code translate="no">prompt | llm_with_tools | run_tools</code>), with the
pieces split across <code translate="no">prompts.py</code>,
<code translate="no">retriever.py</code>, <code translate="no">tools.py</code>,
<code translate="no">chain.py</code>, and <code translate="no">main.py</code>.

## Where it stands

A learning project, not production. The corpus is a handful of local planet text
files, the tools are small, and the point was to understand prompt templates,
retrieval, and tool calling rather than to ship something. The repo is one
commit from following the course.
