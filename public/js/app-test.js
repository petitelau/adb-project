import {  HomeView } from "./app.js";


test("roman-number",  assert =>  {
    const collect = [];

// prepare the environment
    const inputEL = document.createElement('INPUT');
    const formEL = document.createElement('FORM');
    const resultContainer=  document.createElement('P');
    const resultLabel=  document.createElement('SPAN');
    const result=  document.createElement('SPAN');

    const v =HomeView(inputEL, formEL, resultContainer, resultLabel, result);

    let testCases = [
        {
            roman: 'V',
            num:5
        },
        {
            roman: 'XIII',
            num:13
        },
        {
            roman: '',
            num:0
        },
    ];

    let p;
    for (let t of testCases) {
    v.fetchFn(t.num,  async (data)=> {
                p = await new Promise((resolve, reject) => {
                    assert.equals(t.roman, data.romanNumber);
                    v.updateHtml(data);
                    assert.equals(result.textContent, t.roman);
                    if (t.num == 0)
                        assert.equals(resultLabel.textContent, 'Only a number between 1 and 255 allowed');

                    //console.log({expected: t.roman, got: data.romanNumber});
                    collect.push({expected: t.roman, got: data.romanNumber});
                    resolve(collect);
                });
                if (collect.length == 3) {
                    report('roman-number', assert.getOk(), '')
                }

            }
        );
    }

});
