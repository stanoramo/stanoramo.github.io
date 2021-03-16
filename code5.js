gdjs.Endless_32RunnerCode = {};
gdjs.Endless_32RunnerCode.GDBackgroundObjects1= [];
gdjs.Endless_32RunnerCode.GDBackgroundObjects2= [];
gdjs.Endless_32RunnerCode.GDBackgroundObjects3= [];
gdjs.Endless_32RunnerCode.GDMeteor1Objects1= [];
gdjs.Endless_32RunnerCode.GDMeteor1Objects2= [];
gdjs.Endless_32RunnerCode.GDMeteor1Objects3= [];
gdjs.Endless_32RunnerCode.GDMeteor2Objects1= [];
gdjs.Endless_32RunnerCode.GDMeteor2Objects2= [];
gdjs.Endless_32RunnerCode.GDMeteor2Objects3= [];
gdjs.Endless_32RunnerCode.GDMeteor3Objects1= [];
gdjs.Endless_32RunnerCode.GDMeteor3Objects2= [];
gdjs.Endless_32RunnerCode.GDMeteor3Objects3= [];
gdjs.Endless_32RunnerCode.GDMeteor4Objects1= [];
gdjs.Endless_32RunnerCode.GDMeteor4Objects2= [];
gdjs.Endless_32RunnerCode.GDMeteor4Objects3= [];
gdjs.Endless_32RunnerCode.GDMeteor5Objects1= [];
gdjs.Endless_32RunnerCode.GDMeteor5Objects2= [];
gdjs.Endless_32RunnerCode.GDMeteor5Objects3= [];
gdjs.Endless_32RunnerCode.GDMeteor6Objects1= [];
gdjs.Endless_32RunnerCode.GDMeteor6Objects2= [];
gdjs.Endless_32RunnerCode.GDMeteor6Objects3= [];
gdjs.Endless_32RunnerCode.GDRocketObjects1= [];
gdjs.Endless_32RunnerCode.GDRocketObjects2= [];
gdjs.Endless_32RunnerCode.GDRocketObjects3= [];
gdjs.Endless_32RunnerCode.GDGroundObjects1= [];
gdjs.Endless_32RunnerCode.GDGroundObjects2= [];
gdjs.Endless_32RunnerCode.GDGroundObjects3= [];
gdjs.Endless_32RunnerCode.GDCrystal1Objects1= [];
gdjs.Endless_32RunnerCode.GDCrystal1Objects2= [];
gdjs.Endless_32RunnerCode.GDCrystal1Objects3= [];
gdjs.Endless_32RunnerCode.GDCrystal2Objects1= [];
gdjs.Endless_32RunnerCode.GDCrystal2Objects2= [];
gdjs.Endless_32RunnerCode.GDCrystal2Objects3= [];
gdjs.Endless_32RunnerCode.GDCrystal3Objects1= [];
gdjs.Endless_32RunnerCode.GDCrystal3Objects2= [];
gdjs.Endless_32RunnerCode.GDCrystal3Objects3= [];
gdjs.Endless_32RunnerCode.GDGoldCoinObjects1= [];
gdjs.Endless_32RunnerCode.GDGoldCoinObjects2= [];
gdjs.Endless_32RunnerCode.GDGoldCoinObjects3= [];
gdjs.Endless_32RunnerCode.GDPauseObjects1= [];
gdjs.Endless_32RunnerCode.GDPauseObjects2= [];
gdjs.Endless_32RunnerCode.GDPauseObjects3= [];
gdjs.Endless_32RunnerCode.GDScoreObjects1= [];
gdjs.Endless_32RunnerCode.GDScoreObjects2= [];
gdjs.Endless_32RunnerCode.GDScoreObjects3= [];
gdjs.Endless_32RunnerCode.GDCoinObjects1= [];
gdjs.Endless_32RunnerCode.GDCoinObjects2= [];
gdjs.Endless_32RunnerCode.GDCoinObjects3= [];
gdjs.Endless_32RunnerCode.GDBlueLaserObjects1= [];
gdjs.Endless_32RunnerCode.GDBlueLaserObjects2= [];
gdjs.Endless_32RunnerCode.GDBlueLaserObjects3= [];
gdjs.Endless_32RunnerCode.GDRedLaserObjects1= [];
gdjs.Endless_32RunnerCode.GDRedLaserObjects2= [];
gdjs.Endless_32RunnerCode.GDRedLaserObjects3= [];
gdjs.Endless_32RunnerCode.GDTestValueObjects1= [];
gdjs.Endless_32RunnerCode.GDTestValueObjects2= [];
gdjs.Endless_32RunnerCode.GDTestValueObjects3= [];

gdjs.Endless_32RunnerCode.conditionTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition0IsTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition1IsTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition2IsTrue_0 = {val:false};


gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDPauseObjects1Objects = Hashtable.newFrom({"Pause": gdjs.Endless_32RunnerCode.GDPauseObjects1});gdjs.Endless_32RunnerCode.eventsList0 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDRocketObjects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDRocketObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


};gdjs.Endless_32RunnerCode.eventsList1 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDRocketObjects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDRocketObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


};gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDMeteor1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor2Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor4Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor5Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor6Objects1Objects = Hashtable.newFrom({"Meteor1": gdjs.Endless_32RunnerCode.GDMeteor1Objects1, "Meteor2": gdjs.Endless_32RunnerCode.GDMeteor2Objects1, "Meteor3": gdjs.Endless_32RunnerCode.GDMeteor3Objects1, "Meteor4": gdjs.Endless_32RunnerCode.GDMeteor4Objects1, "Meteor5": gdjs.Endless_32RunnerCode.GDMeteor5Objects1, "Meteor6": gdjs.Endless_32RunnerCode.GDMeteor6Objects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects1});gdjs.Endless_32RunnerCode.eventsList2 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore")) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"));
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("HighScore").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}}

}


};gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDMeteor1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor2Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor4Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor5Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor6Objects1Objects = Hashtable.newFrom({"Meteor1": gdjs.Endless_32RunnerCode.GDMeteor1Objects1, "Meteor2": gdjs.Endless_32RunnerCode.GDMeteor2Objects1, "Meteor3": gdjs.Endless_32RunnerCode.GDMeteor3Objects1, "Meteor4": gdjs.Endless_32RunnerCode.GDMeteor4Objects1, "Meteor5": gdjs.Endless_32RunnerCode.GDMeteor5Objects1, "Meteor6": gdjs.Endless_32RunnerCode.GDMeteor6Objects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal2Objects1Objects = Hashtable.newFrom({"Crystal1": gdjs.Endless_32RunnerCode.GDCrystal1Objects1, "Crystal3": gdjs.Endless_32RunnerCode.GDCrystal3Objects1, "Crystal2": gdjs.Endless_32RunnerCode.GDCrystal2Objects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects2});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal1Objects2Objects = Hashtable.newFrom({"Crystal1": gdjs.Endless_32RunnerCode.GDCrystal1Objects2});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects2});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal2Objects2Objects = Hashtable.newFrom({"Crystal2": gdjs.Endless_32RunnerCode.GDCrystal2Objects2});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal3Objects1Objects = Hashtable.newFrom({"Crystal3": gdjs.Endless_32RunnerCode.GDCrystal3Objects1});gdjs.Endless_32RunnerCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Endless_32RunnerCode.GDCrystal1Objects1, gdjs.Endless_32RunnerCode.GDCrystal1Objects2);

gdjs.copyArray(gdjs.Endless_32RunnerCode.GDRocketObjects1, gdjs.Endless_32RunnerCode.GDRocketObjects2);


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects2Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").add(100 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CoinMultiplier")));
}{runtimeScene.getGame().getVariables().get("Score").add(100);
}}

}


{

gdjs.copyArray(gdjs.Endless_32RunnerCode.GDCrystal2Objects1, gdjs.Endless_32RunnerCode.GDCrystal2Objects2);

gdjs.copyArray(gdjs.Endless_32RunnerCode.GDRocketObjects1, gdjs.Endless_32RunnerCode.GDRocketObjects2);


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects2Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal2Objects2Objects, false, runtimeScene, false);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").add(500 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CoinMultiplier")));
}{runtimeScene.getGame().getVariables().get("Score").add(500);
}}

}


{

/* Reuse gdjs.Endless_32RunnerCode.GDCrystal3Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDRocketObjects1 */

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal3Objects1Objects, false, runtimeScene, false);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("coin").add(1000 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CoinMultiplier")));
}{runtimeScene.getGame().getVariables().get("Score").add(1000);
}}

}


};gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal2Objects1Objects = Hashtable.newFrom({"Crystal1": gdjs.Endless_32RunnerCode.GDCrystal1Objects1, "Crystal3": gdjs.Endless_32RunnerCode.GDCrystal3Objects1, "Crystal2": gdjs.Endless_32RunnerCode.GDCrystal2Objects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBlueLaserObjects1Objects = Hashtable.newFrom({"BlueLaser": gdjs.Endless_32RunnerCode.GDBlueLaserObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDMeteor1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor2Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor4Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor5Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor6Objects1Objects = Hashtable.newFrom({"Meteor1": gdjs.Endless_32RunnerCode.GDMeteor1Objects1, "Meteor2": gdjs.Endless_32RunnerCode.GDMeteor2Objects1, "Meteor3": gdjs.Endless_32RunnerCode.GDMeteor3Objects1, "Meteor4": gdjs.Endless_32RunnerCode.GDMeteor4Objects1, "Meteor5": gdjs.Endless_32RunnerCode.GDMeteor5Objects1, "Meteor6": gdjs.Endless_32RunnerCode.GDMeteor6Objects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBlueLaserObjects1Objects = Hashtable.newFrom({"BlueLaser": gdjs.Endless_32RunnerCode.GDBlueLaserObjects1});gdjs.Endless_32RunnerCode.eventsList4 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Endless_32RunnerCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].getVariables().get("Speed")).setNumber(200);
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].getVariables().get("SpawnSpeed")).setNumber(0.3);
}
}{runtimeScene.getVariables().get("LazerDamage").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LazerDamage")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Endless_32RunnerCode.GDBackgroundObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "IncreaseDifficulty");
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].getVariables().get("SpawnSpeed")) > 0.1 ) {
        gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDBackgroundObjects1[k] = gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length = k;}}
if (gdjs.Endless_32RunnerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].getVariables().get("Speed")).add(10);
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDBackgroundObjects1[i].getVariables().get("SpawnSpeed")).sub(0.01);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IncreaseDifficulty");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pause"), gdjs.Endless_32RunnerCode.GDPauseObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDPauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Endless_32RunnerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDRocketObjects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDRocketObjects1[i].getX() < 750 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDRocketObjects1[k] = gdjs.Endless_32RunnerCode.GDRocketObjects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDRocketObjects1.length = k;}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Endless_32RunnerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDRocketObjects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDRocketObjects1[i].getX() > 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDRocketObjects1[k] = gdjs.Endless_32RunnerCode.GDRocketObjects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDRocketObjects1.length = k;}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Endless_32RunnerCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor1"), gdjs.Endless_32RunnerCode.GDMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor2"), gdjs.Endless_32RunnerCode.GDMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor3"), gdjs.Endless_32RunnerCode.GDMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor4"), gdjs.Endless_32RunnerCode.GDMeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor5"), gdjs.Endless_32RunnerCode.GDMeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor6"), gdjs.Endless_32RunnerCode.GDMeteor6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Invincible")) == 0;
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDMeteor1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor2Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor4Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor5Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor6Objects1Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Endless_32RunnerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
{ //Subevents
gdjs.Endless_32RunnerCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Endless_32RunnerCode.GDBackgroundObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("SpawnSpeed"))), "Enemy");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length = 0;

{runtimeScene.getVariables().get("met").setNumber((gdjs.random(6)));
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDMeteor1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor2Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor4Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor5Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor6Objects1Objects, "Meteor" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("met")), gdjs.random(800), -(10), "1");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Endless_32RunnerCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crystal1"), gdjs.Endless_32RunnerCode.GDCrystal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Crystal2"), gdjs.Endless_32RunnerCode.GDCrystal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Crystal3"), gdjs.Endless_32RunnerCode.GDCrystal3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor1"), gdjs.Endless_32RunnerCode.GDMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor2"), gdjs.Endless_32RunnerCode.GDMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor3"), gdjs.Endless_32RunnerCode.GDMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor4"), gdjs.Endless_32RunnerCode.GDMeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor5"), gdjs.Endless_32RunnerCode.GDMeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor6"), gdjs.Endless_32RunnerCode.GDMeteor6Objects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCrystal1Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCrystal1Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCrystal3Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCrystal3Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCrystal2Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCrystal2Objects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("Speed"))), 0);
}
}}

}


{



}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "IncreaseHealth");
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")) > 120;
}}
if (gdjs.Endless_32RunnerCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("LazerDamage").sub(10);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IncreaseHealth");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Crystal1"), gdjs.Endless_32RunnerCode.GDCrystal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Crystal2"), gdjs.Endless_32RunnerCode.GDCrystal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Crystal3"), gdjs.Endless_32RunnerCode.GDCrystal3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDCrystal1Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDCrystal2Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDCrystal3Objects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCrystal1Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCrystal1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCrystal3Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCrystal3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCrystal2Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCrystal2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 5, 1);
}
{ //Subevents
gdjs.Endless_32RunnerCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Endless_32RunnerCode.GDBackgroundObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDBackgroundObjects1[0].getVariables()).get("SpawnSpeed"))) + gdjs.randomFloatInRange(0.01, 0.05), "Coin");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.Endless_32RunnerCode.GDCrystal1Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDCrystal2Objects1.length = 0;

gdjs.Endless_32RunnerCode.GDCrystal3Objects1.length = 0;

{runtimeScene.getVariables().get("gem").setNumber((gdjs.random(3)));
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDCrystal1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDCrystal2Objects1Objects, "Crystal" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("gem")), gdjs.random(800), -(10), "1");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Coin");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Endless_32RunnerCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDScoreObjects1[i].setString("Score: " + (gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")))));
}
}{runtimeScene.getGame().getVariables().get("Score").add(100);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Endless_32RunnerCode.GDCoinObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDCoinObjects1[i].setString((gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("coin")))));
}
}}

}


{



}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("FireRate")), "FireRate");
}}
if (gdjs.Endless_32RunnerCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);
gdjs.Endless_32RunnerCode.GDBlueLaserObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBlueLaserObjects1Objects, (( gdjs.Endless_32RunnerCode.GDRocketObjects1.length === 0 ) ? 0 :gdjs.Endless_32RunnerCode.GDRocketObjects1[0].getPointX("Gun")), (( gdjs.Endless_32RunnerCode.GDRocketObjects1.length === 0 ) ? 0 :gdjs.Endless_32RunnerCode.GDRocketObjects1[0].getPointY("Gun")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BlueLaser"), gdjs.Endless_32RunnerCode.GDBlueLaserObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDBlueLaserObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDBlueLaserObjects1[i].addPolarForce(270, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("LazerSpeed")), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueLaser"), gdjs.Endless_32RunnerCode.GDBlueLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor1"), gdjs.Endless_32RunnerCode.GDMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor2"), gdjs.Endless_32RunnerCode.GDMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor3"), gdjs.Endless_32RunnerCode.GDMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor4"), gdjs.Endless_32RunnerCode.GDMeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor5"), gdjs.Endless_32RunnerCode.GDMeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor6"), gdjs.Endless_32RunnerCode.GDMeteor6Objects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDMeteor1Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor2Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor3Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor4Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor5Objects1ObjectsGDgdjs_46Endless_9532RunnerCode_46GDMeteor6Objects1Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBlueLaserObjects1Objects, false, runtimeScene, false);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDBlueLaserObjects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor1Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor2Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor3Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor4Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor5Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor6Objects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i].getVariables().get("Health")).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")));
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i].getVariables().get("Health")).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")));
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i].getVariables().get("Health")).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")));
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i].getVariables().get("Health")).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")));
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i].getVariables().get("Health")).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")));
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i].getVariables().get("Health")).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("LazerDamage")));
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDBlueLaserObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDBlueLaserObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor1"), gdjs.Endless_32RunnerCode.GDMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor2"), gdjs.Endless_32RunnerCode.GDMeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor3"), gdjs.Endless_32RunnerCode.GDMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor4"), gdjs.Endless_32RunnerCode.GDMeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor5"), gdjs.Endless_32RunnerCode.GDMeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor6"), gdjs.Endless_32RunnerCode.GDMeteor6Objects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i].getVariables().get("Health")) <= 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDMeteor1Objects1[k] = gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i].getVariables().get("Health")) <= 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDMeteor2Objects1[k] = gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i].getVariables().get("Health")) <= 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDMeteor3Objects1[k] = gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i].getVariables().get("Health")) <= 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDMeteor4Objects1[k] = gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i].getVariables().get("Health")) <= 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDMeteor5Objects1[k] = gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i].getVariableNumber(gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i].getVariables().get("Health")) <= 0 ) {
        gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDMeteor6Objects1[k] = gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length = k;}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor1Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor2Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor3Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor4Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor5Objects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDMeteor6Objects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor4Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor5Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDMeteor6Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


};

gdjs.Endless_32RunnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Endless_32RunnerCode.GDBackgroundObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDBackgroundObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDBackgroundObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor1Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor1Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor1Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor2Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor2Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor2Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor3Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor3Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor3Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor4Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor4Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor4Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor5Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor5Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor5Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor6Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor6Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDMeteor6Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDRocketObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDRocketObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDRocketObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDGroundObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDGroundObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDGroundObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal1Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal1Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal1Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal2Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal2Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal2Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal3Objects1.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal3Objects2.length = 0;
gdjs.Endless_32RunnerCode.GDCrystal3Objects3.length = 0;
gdjs.Endless_32RunnerCode.GDGoldCoinObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDGoldCoinObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDGoldCoinObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDPauseObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDPauseObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDPauseObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDScoreObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDScoreObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDScoreObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDCoinObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDCoinObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDCoinObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDBlueLaserObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDBlueLaserObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDBlueLaserObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDRedLaserObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDRedLaserObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDRedLaserObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDTestValueObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDTestValueObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDTestValueObjects3.length = 0;

gdjs.Endless_32RunnerCode.eventsList4(runtimeScene);
return;

}

gdjs['Endless_32RunnerCode'] = gdjs.Endless_32RunnerCode;
