gdjs.Endless_32RunnerCode = {};
gdjs.Endless_32RunnerCode.GDRocketObjects1= [];
gdjs.Endless_32RunnerCode.GDRocketObjects2= [];
gdjs.Endless_32RunnerCode.GDRocketObjects3= [];
gdjs.Endless_32RunnerCode.GDAsteroidObjects1= [];
gdjs.Endless_32RunnerCode.GDAsteroidObjects2= [];
gdjs.Endless_32RunnerCode.GDAsteroidObjects3= [];
gdjs.Endless_32RunnerCode.GDGroundLayerObjects1= [];
gdjs.Endless_32RunnerCode.GDGroundLayerObjects2= [];
gdjs.Endless_32RunnerCode.GDGroundLayerObjects3= [];
gdjs.Endless_32RunnerCode.GDScoreObjects1= [];
gdjs.Endless_32RunnerCode.GDScoreObjects2= [];
gdjs.Endless_32RunnerCode.GDScoreObjects3= [];
gdjs.Endless_32RunnerCode.GDNewGameObjects1= [];
gdjs.Endless_32RunnerCode.GDNewGameObjects2= [];
gdjs.Endless_32RunnerCode.GDNewGameObjects3= [];
gdjs.Endless_32RunnerCode.GDGameOverObjects1= [];
gdjs.Endless_32RunnerCode.GDGameOverObjects2= [];
gdjs.Endless_32RunnerCode.GDGameOverObjects3= [];
gdjs.Endless_32RunnerCode.GDBorderObjects1= [];
gdjs.Endless_32RunnerCode.GDBorderObjects2= [];
gdjs.Endless_32RunnerCode.GDBorderObjects3= [];
gdjs.Endless_32RunnerCode.GDInvincibleObjects1= [];
gdjs.Endless_32RunnerCode.GDInvincibleObjects2= [];
gdjs.Endless_32RunnerCode.GDInvincibleObjects3= [];
gdjs.Endless_32RunnerCode.GDinvicibilityObjects1= [];
gdjs.Endless_32RunnerCode.GDinvicibilityObjects2= [];
gdjs.Endless_32RunnerCode.GDinvicibilityObjects3= [];

gdjs.Endless_32RunnerCode.conditionTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition0IsTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition1IsTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition2IsTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.condition3IsTrue_0 = {val:false};
gdjs.Endless_32RunnerCode.conditionTrue_1 = {val:false};
gdjs.Endless_32RunnerCode.condition0IsTrue_1 = {val:false};
gdjs.Endless_32RunnerCode.condition1IsTrue_1 = {val:false};
gdjs.Endless_32RunnerCode.condition2IsTrue_1 = {val:false};
gdjs.Endless_32RunnerCode.condition3IsTrue_1 = {val:false};


gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDInvincibleObjects1Objects = Hashtable.newFrom({"Invincible": gdjs.Endless_32RunnerCode.GDInvincibleObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDInvincibleObjects1Objects = Hashtable.newFrom({"Invincible": gdjs.Endless_32RunnerCode.GDInvincibleObjects1});gdjs.Endless_32RunnerCode.eventsList0 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Invincible"), gdjs.Endless_32RunnerCode.GDInvincibleObjects1);
gdjs.copyArray(runtimeScene.getObjects("invicibility"), gdjs.Endless_32RunnerCode.GDinvicibilityObjects1);
{runtimeScene.getVariables().get("state").setNumber(1);
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDinvicibilityObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDinvicibilityObjects1[i].hide();
}
}}

}


};gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.Endless_32RunnerCode.GDAsteroidObjects2});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.Endless_32RunnerCode.GDBorderObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.Endless_32RunnerCode.GDBorderObjects1});gdjs.Endless_32RunnerCode.eventsList1 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition2IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Enemy");
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("speed")) < 300;
}if ( gdjs.Endless_32RunnerCode.condition1IsTrue_0.val ) {
{
{gdjs.Endless_32RunnerCode.conditionTrue_1 = gdjs.Endless_32RunnerCode.condition2IsTrue_0;
gdjs.Endless_32RunnerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7638356);
}
}}
}
if (gdjs.Endless_32RunnerCode.condition2IsTrue_0.val) {
gdjs.copyArray(gdjs.Endless_32RunnerCode.GDAsteroidObjects1, gdjs.Endless_32RunnerCode.GDAsteroidObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDAsteroidObjects2Objects, gdjs.random(800), -(5), "3");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}{runtimeScene.getVariables().get("speed").add(2);
}}

}


{


{
}

}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects2);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDRocketObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects2);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDRocketObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.Endless_32RunnerCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBorderObjects1Objects, false, runtimeScene, false);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDBorderObjects1 */
/* Reuse gdjs.Endless_32RunnerCode.GDRocketObjects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDRocketObjects1[i].separateFromObjectsList(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDBorderObjects1Objects, false);
}
}}

}


};gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.Endless_32RunnerCode.GDRocketObjects1});gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.Endless_32RunnerCode.GDAsteroidObjects1});gdjs.Endless_32RunnerCode.eventsList2 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.Endless_32RunnerCode.GDAsteroidObjects1);
/* Reuse gdjs.Endless_32RunnerCode.GDGameOverObjects1 */
gdjs.copyArray(runtimeScene.getObjects("GroundLayer"), gdjs.Endless_32RunnerCode.GDGroundLayerObjects1);
{runtimeScene.getVariables().get("state").setNumber(0);
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDAsteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDGroundLayerObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDGroundLayerObjects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDGroundLayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.Endless_32RunnerCode.eventsList3 = function(runtimeScene) {

{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Endless_32RunnerCode.GDGameOverObjects1);
{runtimeScene.getVariables().get("state").setNumber(0);
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDGameOverObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Invincible"), gdjs.Endless_32RunnerCode.GDInvincibleObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition2IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDInvincibleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Endless_32RunnerCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i].getAnimation() == 1 ) {
        gdjs.Endless_32RunnerCode.condition2IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDInvincibleObjects1[k] = gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length = k;}}
}
if (gdjs.Endless_32RunnerCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDInvincibleObjects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Invincible"), gdjs.Endless_32RunnerCode.GDInvincibleObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition2IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDInvincibleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Endless_32RunnerCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i].getAnimation() == 0 ) {
        gdjs.Endless_32RunnerCode.condition2IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDInvincibleObjects1[k] = gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length = k;}}
}
if (gdjs.Endless_32RunnerCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Endless_32RunnerCode.GDInvincibleObjects1 */
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 0;
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDRocketObjects1[i].setX(370);
}
}{runtimeScene.getVariables().get("speed").setNumber(250);
}
{ //Subevents
gdjs.Endless_32RunnerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 1;
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.Endless_32RunnerCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundLayer"), gdjs.Endless_32RunnerCode.GDGroundLayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewGame"), gdjs.Endless_32RunnerCode.GDNewGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Endless_32RunnerCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDAsteroidObjects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("speed")), 0);
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDGroundLayerObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDGroundLayerObjects1[i].returnVariable(gdjs.Endless_32RunnerCode.GDGroundLayerObjects1[i].getVariables().getFromIndex(0)).add(100);
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDScoreObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Endless_32RunnerCode.GDGroundLayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Endless_32RunnerCode.GDGroundLayerObjects1[0].getVariables()).getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDNewGameObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDNewGameObjects1[i].hide();
}
}
{ //Subevents
gdjs.Endless_32RunnerCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.Endless_32RunnerCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Invincible"), gdjs.Endless_32RunnerCode.GDInvincibleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Endless_32RunnerCode.GDRocketObjects1);

gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDRocketObjects1Objects, gdjs.Endless_32RunnerCode.mapOfGDgdjs_46Endless_9532RunnerCode_46GDAsteroidObjects1Objects, false, runtimeScene, true);
}if ( gdjs.Endless_32RunnerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length;i<l;++i) {
    if ( gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i].getAnimation() == 0 ) {
        gdjs.Endless_32RunnerCode.condition1IsTrue_0.val = true;
        gdjs.Endless_32RunnerCode.GDInvincibleObjects1[k] = gdjs.Endless_32RunnerCode.GDInvincibleObjects1[i];
        ++k;
    }
}
gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length = k;}}
if (gdjs.Endless_32RunnerCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("state").setNumber(2);
}}

}


{


gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = false;
{
gdjs.Endless_32RunnerCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("state")) == 2;
}if (gdjs.Endless_32RunnerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Endless_32RunnerCode.GDGameOverObjects1);
{for(var i = 0, len = gdjs.Endless_32RunnerCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Endless_32RunnerCode.GDGameOverObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Endless_32RunnerCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Endless_32RunnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Endless_32RunnerCode.GDRocketObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDRocketObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDRocketObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDAsteroidObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDAsteroidObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDAsteroidObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDGroundLayerObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDGroundLayerObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDGroundLayerObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDScoreObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDScoreObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDScoreObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDNewGameObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDNewGameObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDNewGameObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDGameOverObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDGameOverObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDGameOverObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDBorderObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDBorderObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDBorderObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDInvincibleObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDInvincibleObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDInvincibleObjects3.length = 0;
gdjs.Endless_32RunnerCode.GDinvicibilityObjects1.length = 0;
gdjs.Endless_32RunnerCode.GDinvicibilityObjects2.length = 0;
gdjs.Endless_32RunnerCode.GDinvicibilityObjects3.length = 0;

gdjs.Endless_32RunnerCode.eventsList3(runtimeScene);
return;

}

gdjs['Endless_32RunnerCode'] = gdjs.Endless_32RunnerCode;
