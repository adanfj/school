<script>
import Entity from './components/Entity.vue';
export default {
  data() {
    return {
      actions: [],
      specialAttackBlock:0,
      entities: [{
        name: "Monster",
        life: 100
      }, {
        name: "Player",
        life: 100
      }]
    }
  },
  components: {
    Entity
  },
  methods: {
    random(min, max) {
      return Math.floor(min + Math.random() * (max - min))
    },
    action(attacker, recipient, damage, type) {
      if (type == "attack") recipient.life -= damage
      if (type == "heal") {
        attacker.life += damage
        attacker.life =Math.min(100,attacker.life)
      }
      return {
        attacker, recipient, damage, type
      }
    },
    attack() {
      if(this.entities.some(e=>e.life<=0))return;
      this.actions = [
        ...this.actions,
        this.action(this.entities[1], this.entities[0], this.random(5, 12), "attack"),
        this.action(this.entities[0], this.entities[1], this.random(8, 15), "attack"),
      ]
      if(this.specialAttackBlock>0)this.specialAttackBlock--;
    },
    specialAttack() {
      if(this.entities.some(e=>e.life<=0))return;
      this.actions = [
        ...this.actions,
        this.action(this.entities[1], this.entities[0], this.random(10, 25), "attack"),
        this.action(this.entities[0], this.entities[1], this.random(8, 15), "attack"),
      ]
      this.specialAttackBlock=3;
    },
    async heal() {
      if(this.entities.some(e=>e.life<=0))return;
      this.actions = [
        ...this.actions,
        this.action(this.entities[1], null, this.random(8, 20), "heal"),
        this.action(this.entities[0], this.entities[1], this.random(8, 15), "attack"),
      ]
      if(this.specialAttackBlock>0)this.specialAttackBlock--;
    },
    async healForever(){
      setInterval(this.heal,40)
    },
    restart(){
      this.specialAttackBlock=0;
      this.actions=[]
      for (const entity in this.entities) {
        if (Object.hasOwnProperty.call(this.entities, entity)) {
          this.entities[entity].life=100;
        }
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row g-0">
      <Entity v-for="entity in entities" :name="entity.name" :life="entity.life" :victory="entities.some(e=>e.life<=0&&e.name!=entity.name)" />
      <button class="col mx-1 btn btn-outline-danger" @click="attack">Attack</button>
      <button :disabled="specialAttackBlock>0" class="col mx-1 btn btn-outline-danger" @click="specialAttack">Special Attack</button>
      <button class="col mx-1 btn btn-outline-success" @click="heal">Heal</button>
      <button class="col mx-1 btn btn-outline-success" @click="healForever">Heal COnstantly</button>
      <button class="col mx-1 btn btn-outline-secondary" @click="restart">Restart</button>
    </div>
    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title">Actions</h5>
        <p v-for="action in actions" class="card-text">
        <div v-if="action.type == 'attack'"><span :class="action.attacker.name">{{ action.attacker.name }}</span> attacked
          <span :class="action.recipient.name">{{ action.recipient.name }}</span> with <span class="text-danger">{{
            action.damage
          }}</span></div>
        <div v-if="action.type == 'heal'"><span :class="action.attacker.name">{{ action.attacker.name }}</span> recovers
          <span class="text-success">{{ action.damage }}</span></div>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Monster {
  color: darkslateblue;
}

.Player {
  color: darkcyan;
}
</style>
