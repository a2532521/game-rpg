
cc.Class({
    extends: cc.Component,

    properties: {
       enemyNode:cc.Node,
    },

   onLoad(){
       this.enemy =this.enemyNode.getComponent('enemy');
   },
   start(){
       this.enemy.init(cfg.enmeyHpMax);
   },
   playerAttack(){

    this.enemy.hurt(cfg.playerAtk);
   },

});
