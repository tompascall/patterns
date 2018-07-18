export default function duck() {
  return {
    swim() { console.log('swimming like a duck') },
    setFlyBehavior(flyBehavior) {
      this.flyBehavior = flyBehavior;
    },
    performFly() {
      this.flyBehavior.fly();
    },
  };
};
