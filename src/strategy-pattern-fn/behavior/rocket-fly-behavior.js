import flyBehavior from '../interface/fly-behavior';

const rocketFlyBehavior = Object.create(flyBehavior);
rocketFlyBehavior.fly = () => { console.log('I can rocket fly') }

export default rocketFlyBehavior;