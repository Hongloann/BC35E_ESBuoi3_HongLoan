import { List } from '../models/ListToDo.js';


let list = new List();

list.Get()


list.renderAct();
list.renderAct1();

document.querySelector('#addItem').onclick = () => {
    let active = document.querySelector('#newTask').value;
    list.addAct(active);
    list.renderAct();
    list.Save()


}
window.delAct = (index) => {
    list.Delete(index);
    list.renderAct()
    list.Save()

}
window.checkAct = (index) => {
    list.Complete(index);
    list.renderAct();
    list.renderAct1();
    list.Save()

}
window.delAct1 = (index) => {
    list.Delete1(index);
    list.renderAct1();
    list.Save();

}
document.querySelector('#two').onclick = () => {
    list.Sort1()
    list.renderAct();
    list.Save()

}
document.querySelector('#three').onclick = () => {
    list.Sort()
    list.renderAct();
    list.Save()

}