
cc.Class({
    extends: cc.Component,

    properties: {
      hpLabel : cc.Label,
      
    },
    onLoad(){
        this.animation = this.node.getComponent(cc.Animation);
    },
    init(hp){
        this.setHp(hp)
    },
    setHp(hp){
        this.hp = hp;
        this.updateHp();
    },
    updateHp(){
        this.hpLabel.string = `${this.hp}hp`;
    },

    hurt(num){
        this.hp -= num;
        this.updateHp();
        this.animation.play('hurt');
    },
   
});
