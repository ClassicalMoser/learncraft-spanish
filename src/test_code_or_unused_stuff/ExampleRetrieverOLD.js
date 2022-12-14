import React, {useState, useEffect, useRef} from 'react';
import { qb } from './QuickbaseTablesInfo';
import { fetchAndCreateTable } from './QuickbaseFetchFuntions';
import './App.css';

export default function ExampleRetriever() {
  const tables = useRef({ vocab: [], lessons: [] })
  // vocab
  //const [search, setSearch] = useState('')
  //const filteredVocab = tables.current.vocab.filter(vocab => vocab.vocabName.toLowerCase().includes(search.toLowerCase()))
  const [filteredVocab, setFilteredVocab] = useState([])
  //const [lessonTitleSelect, setLessonTitleSelect] = useState({options: [''], selected: 0})
  //const [lessonNumSelect, setLessonNumSelect] = useState({})
  const [customSearchVocab, setCustomSearchVocab] = useState([])
  // examples
  const [noSpanglish, setNoSpanglish] = useState(false)
  const [shuffledSentences, setShuffledSentences] = useState(false)
  const filteredExamples = useRef([])
  const [displayExamples, setDisplayExamples] = useState([])
  //const [filteredExamples, setFilteredExamples] = useState([])

  //////// currently not in use
  function createLessonsSelectOptions(lessons) {
    let arr = []
    //LESSONS.forEach(lesson => arr.push(lesson.name))
    lessons.forEach(lesson => {
      for(let i = 1; i <= lesson.length; i++) {
        arr.push(lesson.name + ' ' + i)
      }
    })
    console.log('createLessonsSelectOpt: ', arr)
    return arr
  }
  function createLessonTitle(option) {
    const lesson = tables.current.lessons.find(element => element.lesson === option)
    const title = lesson ? lesson.vocabIncluded.join('\n') : ''
    return title
  }
  // unused function
  function handleSelect1OnChange(e) {
    e.preventDefault()
    // console.log('selected value: ', e.target.value)
    // //setLessonTitleSelect({options: [...setLessonTitleSelect.options], selected: e.target.value})
    // setLessonTitleSelect({...lessonTitleSelect, selected: e.target.value})
    // console.log(lessonTitleSelect)
  }
////////////

  function retrieveCombinedLessonVocab(selectedLessonName, lessonsTable) {
    const selectedSplitArr = selectedLessonName.split(' ')
    const selectedNum = parseInt(selectedSplitArr.pop())
    const selectedTitle = selectedSplitArr.join(' ')

    let combinedLessonVocab = []
    lessonsTable.forEach(lesson => {
        const splitArr2 = lesson.lesson.split(' ')
        const num2 = parseInt(splitArr2.pop())
        if(lesson.lesson.includes(selectedTitle) && num2 <= selectedNum) {
            combinedLessonVocab = [...combinedLessonVocab, ...lesson.vocabIncluded]
        }
    })
    return combinedLessonVocab
  }

  function handleRetrieveSentencesOnClick(e) {
    e.preventDefault()
    //console.log('handle: ', e.target.firstChild.value)
    
    //console.log('retrive sent')
    //lessonTitleSelect.selected === '' ? tables.current.examples :
    const selectedLesson = e.target.firstChild.value
    const filter1 = selectedLesson === '' ? tables.current.examples : filterExamplesStrict(retrieveCombinedLessonVocab(selectedLesson, tables.current.lessons), tables.current.examples)
    //console.log('filter1: ', filter1)
    const filter2 = filterExamplesLenient(customSearchVocab, filter1)
    //console.log('filter2: ', filter2)
    filteredExamples.current = filter2
    //const strictExamples = filterExamplesStrict(retrieveCombinedLessonVocab('SI1M Lesson 8', table), exTable)
    //const lenientExamples = filterExamplesLenient(['por', 'de'], exTable)
    // const filter3 = noSpanglish ? filter2.filter(example => example.spanglish === 'esp') : filter2
    // const filter4 = shuffledSentences ? shuffleArray(filter3) : filter3
    // setDisplayExamples(filter4)
    //setFilteredExamples(filter2)
    filterExamplesHelper()
  }

  // checks if noSpanglish & shuffleSentences and then sets the displayExamples
  function filterExamplesHelper() {
    const filter2 = filteredExamples.current
    const filter3 = noSpanglish ? filter2.filter(example => example.spanglish === 'esp') : filter2
    const filter4 = shuffledSentences ? shuffleArray(filter3) : filter3
    setDisplayExamples(filter4)
  }

  function filterExamplesStrict(vocabArr, examplesTable) {
    const filteredExamples = examplesTable.filter(example => {
        if(example.vocabIncluded.length == 0) {
            return false
        }
        for(const vocab of example.vocabIncluded) {
            if(!vocabArr.includes(vocab)) {
                return false
            }
        }
        return true
    })
    return filteredExamples
  }

  function filterExamplesLenient(vocabArr, examplesTable) {
      const filteredExamples = vocabArr.length === 0 ? examplesTable : examplesTable.filter(example => {
          for(const parameterVocab of vocabArr) {
              for(const exampleVocab of example.vocabIncluded) {
                  if(exampleVocab.toLowerCase().includes(parameterVocab.toLowerCase())) {
                      return true
                  }
              }
          }
          return false
      })
      return filteredExamples
  }

  function shuffleArray(arr) {        
    const shuffledArr = [...arr]

    for(let i = shuffledArr.length; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i - 1))
        const oldValue = shuffledArr[newIndex]
        shuffledArr[newIndex] = shuffledArr[i - 1]
        shuffledArr[i - 1] = oldValue
    }

    return shuffledArr
  }

  function copySentences() {
    const englishSentences = displayExamples.map(example => {
        return example.englishTranslation
    }).join('\n')
    const spanishSentences = displayExamples.map(example => {
        return example.spanishExample
    }).join('\n')
    //
    const copiedText = englishSentences + '\n\n' + spanishSentences

    //console.log(englishSentences)
    navigator.clipboard.writeText(copiedText)
  }

  function copyTable() {
    const headers = 'Spanish\tEnglish\n'
    const table = displayExamples.map(example => {
        return example.spanishExample + '\t' + example.englishTranslation
    }).join('\n')

    const copiedText = headers + table
    navigator.clipboard.writeText(copiedText)
  }

  async function init() { // gets user token & creates the student examples table
    const queryParams = new URLSearchParams(window.location.search)
    const ut = queryParams.get('ut')
    
    tables.current.vocab = await fetchAndCreateTable(ut, qb.vocabulary)
    console.log('vocab')
    tables.current.examples = await fetchAndCreateTable(ut, qb.examples)
    console.log('example')
    tables.current.lessons = await fetchAndCreateTable(ut, qb.lessons)
    tables.current.lessons.sort((a, b)=>{
      const splitArrA = a.lesson.split(' ')
      const numA = parseInt(splitArrA.pop())
      const titleA = splitArrA.join(' ')

      const splitArrB = b.lesson.split(' ')
      const numB = parseInt(splitArrB.pop())
      const titleB = splitArrB.join(' ')

      return titleA === titleB ? numA - numB : titleA - titleB
    })
    console.log('lessons')
    //console.log('lessons: ', tables.current.lessons)
    setFilteredVocab(tables.current.vocab)

    //const lessons = [{name:'SI1M Lesson', length: 20}, {name:'AS Lesson', length: 12}]

    //setLessonTitleSelect(createLessonsSelectOptions(lessons))

    //const lessonsSelectOptions = createLessonsSelectOptions()

    //console.log(tables)
  }

  useEffect(() => {       
    init() 
    //console.log(tables)       
}, [tables])

  useEffect(() => {
    if(tables.current.lessons.length !== 0) {
    filterExamplesHelper()
    }
  }, [noSpanglish, shuffledSentences])

  return <div>
      <div className='div-header'><h1>Example Retriever</h1></div>
      <div className='div-vocab'>
        {/* Top left section--------------------------------------------------------------------------- */}
        <div className='div-vocab-left'>
          <div className='div-vocab-left-header'>    
            <form onSubmit={(e) => {
              e.preventDefault()
              setCustomSearchVocab([...customSearchVocab, e.target.firstChild.value])
              e.target.firstChild.value = ''
              setFilteredVocab(tables.current.vocab)
            }}>    
              <input className='search' type='text' onChange={(e)=>setFilteredVocab(tables.current.vocab.filter(vocab => vocab.vocabName.toLowerCase().includes(e.target.value.toLowerCase())))}></input>
              <button className='add-to-search-query'>Add to Search Query {'>>'} </button>
            </form>
          </div>
          <ul className='suggestions'>
            {filteredVocab.map((vocab, id) => {
                return (<li key={id} onClick={(e) => setCustomSearchVocab([...customSearchVocab, vocab.vocabName])}>{vocab.vocabName}</li>)
            })}
          </ul>
        </div>
        {/* Top right section---------------------------------------------------------------------------- */}
        <div className='div-vocab-right'>
          <div className='div-vocab-right-header'>
            <form onSubmit={(e)=>handleRetrieveSentencesOnClick(e)}>
              <select className='lesson-select'>
                <option value=''>No lesson filter</option>
                {/*lessonTitleSelect.options.map((option, id) => (<option key={id} title={createLessonTitle(option)}>{option}</option>))*/
                tables.current.lessons.map((lesson, id)=>(<option key={id} title={lesson.vocabIncluded.join('\n')}>{lesson.lesson}</option>))
                }
              </select>
              <button className='retrieve-sentences'>Retrieve Sentences</button>
            </form>
          </div>
          <div>
            {customSearchVocab.map((vocab, id) => (<button key={id} className='custom-vocab' onClick={(e)=>setCustomSearchVocab(customSearchVocab.filter(vocab=>vocab!==e.target.value))} value={vocab}>{vocab}</button>))}
          </div>
        </div>
      </div>
      {/* Mid section with the copy buttons------------------------------------------------------------------ */}
      <div className='div-examples-header'>
        <div>
          <button onClick={copySentences}>Copy as List</button>
          <button onClick={copyTable}>Copy as Table</button>
          <input type='checkbox' name='spanglishCheckbox' onChange={(e) => setNoSpanglish(e.target.checked)}></input><label htmlFor='spanglishCheckbox'>No Spanglish? </label>
          <input type='checkbox' name='shuffledCheckbox'  onChange={(e) => setShuffledSentences(e.target.checked)}></input><label htmlFor='shuffledCheckbox'>Shuffle Sentences? </label>
        </div>
        <div>Num of Results: {displayExamples.length}</div>
      </div>
      {/* Bottom section with list of examples-------------------------------------------------------------- */}
      <div className='div-examples'>
        <table>
          <thead>
            <tr>
              <th>Spanish</th>
              <th>English</th>
              <th>Vocab/Idioms</th>
            </tr>
          </thead>
          <tbody>
            { displayExamples.map((example, id) => {
              return(<tr key={id}>
                <td>{example.spanishExample}</td>
                <td>{example.englishTranslation}</td>
                <td>{example.vocabIncluded.map((vocab, id) => {
                    return(<button key={id} className='vocab-included-button' disabled>{vocab}</button>)
                })}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
  </div>;
}
