gdjs.Initialisation_32PageCode = {};
gdjs.Initialisation_32PageCode.GDTestValueObjects1= [];
gdjs.Initialisation_32PageCode.GDTestValueObjects2= [];
gdjs.Initialisation_32PageCode.GDBackgroundObjects1= [];
gdjs.Initialisation_32PageCode.GDBackgroundObjects2= [];
gdjs.Initialisation_32PageCode.GDHelpObjects1= [];
gdjs.Initialisation_32PageCode.GDHelpObjects2= [];
gdjs.Initialisation_32PageCode.GDStart_95GameObjects1= [];
gdjs.Initialisation_32PageCode.GDStart_95GameObjects2= [];
gdjs.Initialisation_32PageCode.GDDevToolsObjects1= [];
gdjs.Initialisation_32PageCode.GDDevToolsObjects2= [];

gdjs.Initialisation_32PageCode.conditionTrue_0 = {val:false};
gdjs.Initialisation_32PageCode.condition0IsTrue_0 = {val:false};
gdjs.Initialisation_32PageCode.condition1IsTrue_0 = {val:false};


gdjs.Initialisation_32PageCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Initialisation_32PageCode.condition0IsTrue_0.val = false;
{
gdjs.Initialisation_32PageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Initialisation_32PageCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("FireRate").setNumber(0.2);
}{runtimeScene.getGame().getVariables().get("FireRateCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("FireRateLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("CoinMultiplier").setNumber(1);
}{runtimeScene.getGame().getVariables().get("CoinMultiplierCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("CoinMultiplierLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("LaserDamage").setNumber(100);
}{runtimeScene.getGame().getVariables().get("LaserDamageCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("LaserDamageLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("LaserSpeed").setNumber(100);
}{runtimeScene.getGame().getVariables().get("LaserSpeedCost").setNumber(10000);
}{runtimeScene.getGame().getVariables().get("LaserSpeedLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("Invincible").setNumber(0);
}{runtimeScene.getGame().getVariables().get("InfMoney").setNumber(0);
}{runtimeScene.getGame().getVariables().get("God").setNumber(0);
}{runtimeScene.getGame().getVariables().get("HighScore").setNumber(0);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Page", false);
}}

}


};

gdjs.Initialisation_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Initialisation_32PageCode.GDTestValueObjects1.length = 0;
gdjs.Initialisation_32PageCode.GDTestValueObjects2.length = 0;
gdjs.Initialisation_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Initialisation_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Initialisation_32PageCode.GDHelpObjects1.length = 0;
gdjs.Initialisation_32PageCode.GDHelpObjects2.length = 0;
gdjs.Initialisation_32PageCode.GDStart_95GameObjects1.length = 0;
gdjs.Initialisation_32PageCode.GDStart_95GameObjects2.length = 0;
gdjs.Initialisation_32PageCode.GDDevToolsObjects1.length = 0;
gdjs.Initialisation_32PageCode.GDDevToolsObjects2.length = 0;

gdjs.Initialisation_32PageCode.eventsList0(runtimeScene);
return;

}

gdjs['Initialisation_32PageCode'] = gdjs.Initialisation_32PageCode;
