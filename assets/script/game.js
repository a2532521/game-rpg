
cc.Class({
    extends: cc.Component,

    properties: {
       enemyNode:cc.Node,
       playerNode:cc.Node,
       nextBtnNode:cc.Node,
    },

   onLoad(){
       window.game = this;
       this.enemy =this.enemyNode.getComponent('enemy');
       this.player =this.playerNode.getComponent('player');
       this.nextBtnNode.active = false;
   },
   start(){
       this.enemy.init(cfg.enmeyMaxHp);
       this.player.init(cfg.playerMaxHp,cfg.playerMaxAp,cfg.playerMaxMp);
   },
   playerAttack(){
       if(this.player.ap >= cfg.apCost){
        this.player.costAp(cfg.apCost);
        this.player.inclMp(cfg.inclMp);
        this.enemy.hurt(cfg.playerAtk);
       } else {
           console.log('没有行动点');
       }
    
   },
   playerHeal(){
    if(this.player.mp >= cfg.healMpCost){
        this.player.heal();
        this.enemy.hurt(cfg.playerAtk);
    }
   },
   nextRoom(){
    this.node.getComponent(cc.Animation).play('interlude');
    //初始化AP
    this.player.setAp(cfg.playerMaxAp);
   },
   onInterlude(){
    this.enemy.init(cfg.enmeyMaxHp);
   }

});
