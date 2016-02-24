import marked from 'marked';
import text from './text/the-black-stack.md';
import each from 'lodash/each';
import styles from './style.css'

const $root = document.getElementById('root');

function breakSections(text) {
  let sections = [];
  let section;

  function add() {
    if(section) sections.push(section.join('\n'));
  }

  each(text.split('\n'), line => {
    if(line === '----') {
      add();
      section = []
    } else {
      (section = section || []).push(line);
    }
  });

  add();

  return sections;
}

each(breakSections(text), sectionText => {
  const markdown = marked(sectionText);

  const $section = document.createElement('section');
  $section.classList.add('page');

  const $content = document.createElement('div');
  $content.innerHTML = markdown;

  $section.appendChild($content);

  $root.appendChild($section);
});
