gdjs.UpgradesCode = {};
gdjs.UpgradesCode.GDTestValueObjects1= [];
gdjs.UpgradesCode.GDTestValueObjects2= [];
gdjs.UpgradesCode.GDBackgroundObjects1= [];
gdjs.UpgradesCode.GDBackgroundObjects2= [];
gdjs.UpgradesCode.GDBackObjects1= [];
gdjs.UpgradesCode.GDBackObjects2= [];
gdjs.UpgradesCode.GDCoinObjects1= [];
gdjs.UpgradesCode.GDCoinObjects2= [];
gdjs.UpgradesCode.GDFireRateObjects1= [];
gdjs.UpgradesCode.GDFireRateObjects2= [];
gdjs.UpgradesCode.GDUpgradeObjects1= [];
gdjs.UpgradesCode.GDUpgradeObjects2= [];
gdjs.UpgradesCode.GDLaserDamageObjects1= [];
gdjs.UpgradesCode.GDLaserDamageObjects2= [];
gdjs.UpgradesCode.GDCoinMultiplierObjects1= [];
gdjs.UpgradesCode.GDCoinMultiplierObjects2= [];
gdjs.UpgradesCode.GDLaserSpeedObjects1= [];
gdjs.UpgradesCode.GDLaserSpeedObjects2= [];
gdjs.UpgradesCode.GDCostObjects1= [];
gdjs.UpgradesCode.GDCostObjects2= [];
gdjs.UpgradesCode.GDNewObjectObjects1= [];
gdjs.UpgradesCode.GDNewObjectObjects2= [];

gdjs.UpgradesCode.conditionTrue_0 = {val:false};
gdjs.UpgradesCode.condition0IsTrue_0 = {val:false};
gdjs.UpgradesCode.condition1IsTrue_0 = {val:false};
gdjs.UpgradesCode.condition2IsTrue_0 = {val:false};
gdjs.UpgradesCode.condition3IsTrue_0 = {val:false};
gdjs.UpgradesCode.condition4IsTrue_0 = {val:false};
gdjs.UpgradesCode.conditionTrue_1 = {val:false};
gdjs.UpgradesCode.condition0IsTrue_1 = {val:false};
gdjs.UpgradesCode.condition1IsTrue_1 = {val:false};
gdjs.UpgradesCode.condition2IsTrue_1 = {val:false};
gdjs.UpgradesCode.condition3IsTrue_1 = {val:false};
gdjs.UpgradesCode.condition4IsTrue_1 = {val:false};


gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.UpgradesCode.GDBackObjects1});gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDFireRateObjects1Objects = Hashtable.newFrom({"FireRate": gdjs.UpgradesCode.GDFireRateObjects1});gdjs.UpgradesCode.eventsList0 = function(runtimeScene) {

{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
gdjs.UpgradesCode.condition2IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("coin")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("FireRateCost"));
}if ( gdjs.UpgradesCode.condition1IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("FireRateLevel")) <= 9;
}}
}
if (gdjs.UpgradesCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("FireRateCost")));
}{runtimeScene.getGame().getVariables().get("FireRate").sub(0.01);
}{runtimeScene.getGame().getVariables().get("FireRateLevel").add(1);
}{runtimeScene.getGame().getVariables().get("FireRateCost").mul(2.5);
}}

}


};gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserDamageObjects1Objects = Hashtable.newFrom({"LaserDamage": gdjs.UpgradesCode.GDLaserDamageObjects1});gdjs.UpgradesCode.eventsList1 = function(runtimeScene) {

{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
gdjs.UpgradesCode.condition2IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("coin")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LaserDamageCost"));
}if ( gdjs.UpgradesCode.condition1IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LaserDamageLevel")) <= 9;
}}
}
if (gdjs.UpgradesCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LaserDamageCost")));
}{runtimeScene.getGame().getVariables().get("LaserDamage").add(100);
}{runtimeScene.getGame().getVariables().get("LaserDamageCost").mul(2);
}{runtimeScene.getGame().getVariables().get("LaserDamageLevel").add(1);
}}

}


};gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDCoinMultiplierObjects1Objects = Hashtable.newFrom({"CoinMultiplier": gdjs.UpgradesCode.GDCoinMultiplierObjects1});gdjs.UpgradesCode.eventsList2 = function(runtimeScene) {

{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
gdjs.UpgradesCode.condition2IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("coin")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CoinMultiplierCost"));
}if ( gdjs.UpgradesCode.condition1IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CoinMultiplierLevel")) <= 4;
}}
}
if (gdjs.UpgradesCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CoinMultiplierCost")));
}{runtimeScene.getGame().getVariables().get("CoinMultiplier").mul(2);
}{runtimeScene.getGame().getVariables().get("CoinMultiplierLevel").add(1);
}{runtimeScene.getGame().getVariables().get("CoinMultiplierCost").mul(4);
}}

}


};gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserSpeedObjects1Objects = Hashtable.newFrom({"LaserSpeed": gdjs.UpgradesCode.GDLaserSpeedObjects1});gdjs.UpgradesCode.eventsList3 = function(runtimeScene) {

{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
gdjs.UpgradesCode.condition2IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("coin")) >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LaserSpeedCost"));
}if ( gdjs.UpgradesCode.condition1IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LaserSpeedLevel")) <= 9;
}}
}
if (gdjs.UpgradesCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LaserSpeedCost")));
}{runtimeScene.getGame().getVariables().get("LaserSpeed").add(50);
}{runtimeScene.getGame().getVariables().get("LaserSpeedLevel").add(1);
}{runtimeScene.getGame().getVariables().get("LaserSpeedCost").mul(3);
}}

}


};gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDFireRateObjects1Objects = Hashtable.newFrom({"FireRate": gdjs.UpgradesCode.GDFireRateObjects1});gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDCoinMultiplierObjects1Objects = Hashtable.newFrom({"CoinMultiplier": gdjs.UpgradesCode.GDCoinMultiplierObjects1});gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserDamageObjects1Objects = Hashtable.newFrom({"LaserDamage": gdjs.UpgradesCode.GDLaserDamageObjects1});gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserSpeedObjects1Objects = Hashtable.newFrom({"LaserSpeed": gdjs.UpgradesCode.GDLaserSpeedObjects1});gdjs.UpgradesCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.UpgradesCode.GDBackObjects1);

gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.UpgradesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.UpgradesCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("CoinMultiplier"), gdjs.UpgradesCode.GDCoinMultiplierObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireRate"), gdjs.UpgradesCode.GDFireRateObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserDamage"), gdjs.UpgradesCode.GDLaserDamageObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserSpeed"), gdjs.UpgradesCode.GDLaserSpeedObjects1);
{for(var i = 0, len = gdjs.UpgradesCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCoinObjects1[i].setString("Coins: " + (gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("coin")))));
}
}{for(var i = 0, len = gdjs.UpgradesCode.GDCoinMultiplierObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCoinMultiplierObjects1[i].setString("Coin Multiplier: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("CoinMultiplierLevel")));
}
}{for(var i = 0, len = gdjs.UpgradesCode.GDFireRateObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDFireRateObjects1[i].setString("Fire Rate: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("FireRateLevel")));
}
}{for(var i = 0, len = gdjs.UpgradesCode.GDLaserDamageObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDLaserDamageObjects1[i].setString("Damage: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("LaserDamageLevel")));
}
}{for(var i = 0, len = gdjs.UpgradesCode.GDLaserSpeedObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDLaserSpeedObjects1[i].setString("Laser Speed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("LaserSpeedLevel")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireRate"), gdjs.UpgradesCode.GDFireRateObjects1);

gdjs.UpgradesCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDFireRateObjects1Objects, runtimeScene, true, false);
}if (gdjs.UpgradesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cost"), gdjs.UpgradesCode.GDCostObjects1);
{for(var i = 0, len = gdjs.UpgradesCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCostObjects1[i].setString("Cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("FireRateCost")));
}
}
{ //Subevents
gdjs.UpgradesCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LaserDamage"), gdjs.UpgradesCode.GDLaserDamageObjects1);

gdjs.UpgradesCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserDamageObjects1Objects, runtimeScene, true, false);
}if (gdjs.UpgradesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cost"), gdjs.UpgradesCode.GDCostObjects1);
{for(var i = 0, len = gdjs.UpgradesCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCostObjects1[i].setString("Cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("LaserDamageCost")));
}
}
{ //Subevents
gdjs.UpgradesCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CoinMultiplier"), gdjs.UpgradesCode.GDCoinMultiplierObjects1);

gdjs.UpgradesCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDCoinMultiplierObjects1Objects, runtimeScene, true, false);
}if (gdjs.UpgradesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cost"), gdjs.UpgradesCode.GDCostObjects1);
{for(var i = 0, len = gdjs.UpgradesCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCostObjects1[i].setString("Cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("CoinMultiplierCost")));
}
}
{ //Subevents
gdjs.UpgradesCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LaserSpeed"), gdjs.UpgradesCode.GDLaserSpeedObjects1);

gdjs.UpgradesCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserSpeedObjects1Objects, runtimeScene, true, false);
}if (gdjs.UpgradesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cost"), gdjs.UpgradesCode.GDCostObjects1);
{for(var i = 0, len = gdjs.UpgradesCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCostObjects1[i].setString("Cost: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("LaserSpeedCost")));
}
}
{ //Subevents
gdjs.UpgradesCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CoinMultiplier"), gdjs.UpgradesCode.GDCoinMultiplierObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireRate"), gdjs.UpgradesCode.GDFireRateObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserDamage"), gdjs.UpgradesCode.GDLaserDamageObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserSpeed"), gdjs.UpgradesCode.GDLaserSpeedObjects1);

gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
gdjs.UpgradesCode.condition2IsTrue_0.val = false;
gdjs.UpgradesCode.condition3IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDFireRateObjects1Objects, runtimeScene, true, true);
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDCoinMultiplierObjects1Objects, runtimeScene, true, true);
}if ( gdjs.UpgradesCode.condition1IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserDamageObjects1Objects, runtimeScene, true, true);
}if ( gdjs.UpgradesCode.condition2IsTrue_0.val ) {
{
gdjs.UpgradesCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.UpgradesCode.mapOfGDgdjs_46UpgradesCode_46GDLaserSpeedObjects1Objects, runtimeScene, true, true);
}}
}
}
if (gdjs.UpgradesCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cost"), gdjs.UpgradesCode.GDCostObjects1);
{for(var i = 0, len = gdjs.UpgradesCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.UpgradesCode.GDCostObjects1[i].setString("Cost: 0");
}
}}

}


{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
gdjs.UpgradesCode.condition1IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.UpgradesCode.condition0IsTrue_0.val ) {
{
{gdjs.UpgradesCode.conditionTrue_1 = gdjs.UpgradesCode.condition1IsTrue_0;
gdjs.UpgradesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9313116);
}
}}
if (gdjs.UpgradesCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Sound").mul(-(1));
}}

}


{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == 1;
}if (gdjs.UpgradesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 60);
}}

}


{


gdjs.UpgradesCode.condition0IsTrue_0.val = false;
{
gdjs.UpgradesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sound")) == -(1);
}if (gdjs.UpgradesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


{
}

}


};

gdjs.UpgradesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.UpgradesCode.GDTestValueObjects1.length = 0;
gdjs.UpgradesCode.GDTestValueObjects2.length = 0;
gdjs.UpgradesCode.GDBackgroundObjects1.length = 0;
gdjs.UpgradesCode.GDBackgroundObjects2.length = 0;
gdjs.UpgradesCode.GDBackObjects1.length = 0;
gdjs.UpgradesCode.GDBackObjects2.length = 0;
gdjs.UpgradesCode.GDCoinObjects1.length = 0;
gdjs.UpgradesCode.GDCoinObjects2.length = 0;
gdjs.UpgradesCode.GDFireRateObjects1.length = 0;
gdjs.UpgradesCode.GDFireRateObjects2.length = 0;
gdjs.UpgradesCode.GDUpgradeObjects1.length = 0;
gdjs.UpgradesCode.GDUpgradeObjects2.length = 0;
gdjs.UpgradesCode.GDLaserDamageObjects1.length = 0;
gdjs.UpgradesCode.GDLaserDamageObjects2.length = 0;
gdjs.UpgradesCode.GDCoinMultiplierObjects1.length = 0;
gdjs.UpgradesCode.GDCoinMultiplierObjects2.length = 0;
gdjs.UpgradesCode.GDLaserSpeedObjects1.length = 0;
gdjs.UpgradesCode.GDLaserSpeedObjects2.length = 0;
gdjs.UpgradesCode.GDCostObjects1.length = 0;
gdjs.UpgradesCode.GDCostObjects2.length = 0;
gdjs.UpgradesCode.GDNewObjectObjects1.length = 0;
gdjs.UpgradesCode.GDNewObjectObjects2.length = 0;

gdjs.UpgradesCode.eventsList4(runtimeScene);
return;

}

gdjs['UpgradesCode'] = gdjs.UpgradesCode;
