function Human(sex) {
  this.sex = sex;
  this.conflict = `human`;
  this.judgeSex = function () {
    console.log(`i'm ${this.sex}, ${this.conflict}`);
  }
}

/**
 * 继承
 * @param {String} name 男性名称
 */
function Man (name) {
  Human.call(this, `man`);
  this.manName = name;
  this.conflict = `man`
  this.manSay = function () {
    this.judgeSex();
    console.log(`man name: ${this.manName}, ${this.conflict}`);
  }
}

/**
 * 继承
 * @param {String} name 女性名称
 */
function Woman(name) {
  Human.call(this, `woman`);
  this.womanName = name;
  this.conflict = `woman`;
  this.womanSay = function () {
    this.judgeSex();
    console.log(`woman name: ${this.womanName}, ${this.conflict}`);
  }
}

/**
 * 多重集成
 * 注意 key冲突 以最后一个Apply的Object为主
 * @param {String} sex 性别
 * @param {String} name 姓名
 * @param {String} father 父亲名称
 * @param {String} mother 母亲名称
 */
function Child(sex, name, father, mother) {
  Human.call(this, sex);
  Woman.call(this, father);
  Man.call(this, mother);

  this.childName = name;

  this.childSay = function () {
    console.log(`
      i'm: ${this.sex},
      father: ${this.manName},
      mother: ${this.womanName},
      childName: ${this.childName},
      ${this.conflict}
    `);
  }
}

let nick = new Man(`nick`);
let elise = new Woman(`elise`);

let john = new Child(`man`, `john`, `nick`, `elise`);

nick.manSay();
elise.womanSay();
john.childSay();