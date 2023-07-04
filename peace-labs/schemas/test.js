const data = [
  {
    caption: 'Brief Guidelines for PhD Application: ',
    description: [
      {
        markDefs: [
          {
            href: 'https://webapp4.asu.edu/dgsadmissions/Index.jsp',
            _key: '84947e1c4d1d',
            _type: 'link',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "If you are highly motivated and desire to work with us on high-impact problems in Power Electronics and Energy Conversion, please send me an email with your CV and a brief cover letter. Please note that my affiliation is with the 'Systems Engineering' PhD program; so please make sure to select this correctly while preparing your application, if you would like to be considered working in my research group. To complete a new application, please login to the following website ",
            _key: '218e0ebc06380',
          },
          {
            _type: 'span',
            marks: ['84947e1c4d1d', 'strong'],
            text: 'Here',
            _key: '218e0ebc06381',
          },
          {
            _type: 'span',
            marks: [],
            text: " and select 'Systems Engineering' as the PhD program.",
            _key: '218e0ebc06382',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'da410227a8ca',
      },
    ],
  },
  {
    description: [
      {
        markDefs: [
          {
            _type: 'link',
            href: 'https://graduate.engineering.asu.edu/more/',
            _key: '57b29b2ed3a6',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Students who would like to do MS thesis and want to work with us, please visit ',
            _key: '725beffaef7e0',
          },
          {
            marks: ['57b29b2ed3a6'],
            text: 'https://graduate.engineering.asu.edu/more/',
            _key: '725beffaef7e1',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd303e56715f3',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '34409e57dc4c',
        markDefs: [
          {
            _key: '695b2e26cd75',
            _type: 'link',
            href: 'https://furi.engineering.asu.edu/',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '\nFor students who are interested in pursuing undergraduate research, please visit ',
            _key: 'ca792dbd18510',
          },
          {
            text: 'https://furi.engineering.asu.edu/',
            _key: 'ca792dbd18512',
            _type: 'span',
            marks: ['695b2e26cd75'],
          },
        ],
      },
    ],
    caption: 'MORE and FURI Applicants at ASU:',
  },
]

function renderDescription(description) {
  let renderedDescription = ''
  description.forEach((desc) => {
    desc.children.forEach((child) => {
      if (child._type === 'span' && child.marks.length > 0) {
        let text = child.text
        child.marks.forEach((mark) => {
          if (mark._type === 'link') {
            const href = mark.href
            text = text.replace(child.text, `<a href="${href}">${child.text}</a>`)
          }
        })
        renderedDescription += text
      } else {
        renderedDescription += child.text
      }
    })
  })
  return renderedDescription
}

const renderedDescriptions = data.map((item) => renderDescription(item.description))
console.log(renderedDescriptions)
