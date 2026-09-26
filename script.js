const ID='1-PW9xJeG1nYk6nhYxqKGl8RgZ80mJDdnNkjeRE6f_fE',S='Sheet1';
const URL=`https://opensheet.elk.sh/${ID}/${S}`;let d=[];
fetch(URL).then(r=>r.json()).then(x=>{d=x;draw()});
q.oninput=draw;
function draw(){let t=q.value.toLowerCase();let f=d.filter(r=>JSON.stringify(r).toLowerCase().includes(t));stats.textContent='Total Donors: '+f.length;cards.innerHTML='';f.forEach(r=>cards.innerHTML+=`<div class=card><h3>${r.Name||''}</h3><div><span class=badge>${r['Blood Group']||''}</span> 📍 ${r.District||r.Place||''}</div><p>Last Donation: ${r['Last Donation']||'-'}</p><a class=btn href='tel:${r.Phone||''}'>📞 Call</a><a class=btn href='https://wa.me/${r.WhatsApp||r.Phone||''}'>💬 WhatsApp</a></div>`)}