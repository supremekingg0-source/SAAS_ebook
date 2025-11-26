const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    AlignmentType,
    UnderlineType,
    ImageRun,
} = require("docx");
const PDFDocument = require("pdfkit");
const MarkdownIt = require("markdown-it");
const Book = require("../models/Book");
const path = require("path");
const fs = require("fs");

const md = new MarkdownIt();

// Typography configuration matching the PDF export

const DOCX_STYLES = {
  fonts: {
    body: "Charter",
    heading: "Inter",
  },

  sizes: {
    title: 32,
    subtitle: 20,
    author: 18,
    chapterTitle: 24,
    h1: 20,
    h2: 18,
    h3: 16,
    body: 12,
  },
  spacing:{
    // start here 1 hour 7 min
  }