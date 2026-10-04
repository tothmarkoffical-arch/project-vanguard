import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const root=new URL('../',import.meta.url);
const evidence=JSON.parse(await readFile(new URL('evidence/red-blue-v11.json',root),'utf8'));
assert.equal(evidence.format,'public-code-evidence-v2-summary');
assert.equal(evidence.results.length,evidence.independentTasks);
const methods=['single','builder','team','budgetSingle','merge'];
let answersChecked=0;
for(const row of evidence.results){
  assert.deepEqual(Object.keys(row.answers).sort(),[...methods].sort());
  assert.deepEqual(Object.keys(row.grades).sort(),[...methods].sort());
  for(const method of methods){
    const item=row.answers[method];
    assert.match(item.sha256,/^[a-f0-9]{64}$/,'Invalid private-answer fingerprint');
    const grade=row.grades[method];
    assert.ok(Number.isInteger(grade.passed)&&Number.isInteger(grade.total)&&grade.total>0&&grade.passed>=0&&grade.passed<=grade.total);
    assert.ok(Math.abs(grade.score-10*grade.passed/grade.total)<1e-10,'Inconsistent score arithmetic');
    const resource=row.resources[method];
    for(const key of ['calls','seconds','tokens','estimatedUsd'])assert.ok(Number.isFinite(resource[key])&&resource[key]>=0,`Invalid resource: ${key}`);
    answersChecked++;
    console.log(`${row.id} / ${method}: consistent summary; recorded grade ${grade.passed}/${grade.total}`);
  }
}
console.log(`${answersChecked} summary records checked; no code execution or API calls. Answer contents and held-out grades were NOT independently verified.`);
