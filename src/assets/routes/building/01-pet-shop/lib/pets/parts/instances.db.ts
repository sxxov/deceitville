export interface Instance {
	position: [x: number, y: number, z: number];
	rotation: [x: number, y: number, z: number, w: number];
	scale: [x: number, y: number, z: number];
}

export const cat_base: Instance[] = [{"position":[-4,0,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const cat_glass: Instance[] = [{"position":[-4,0.24998164176940918,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const cat_item: Instance[] = [{"position":[-4.000002384185791,1,0],"rotation":[0,0,0,1],"scale":[0.030771534889936447,0.030771534889936447,0.030771534889936447]}];
export const duck_base: Instance[] = [{"position":[4,0,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const duck_glass: Instance[] = [{"position":[4,0.24998164176940918,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const duck_item: Instance[] = [{"position":[4,1,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const rock_base: Instance[] = [{"position":[0,0,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const rock_glass: Instance[] = [{"position":[0,0.24998164176940918,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
export const rock_item: Instance[] = [{"position":[0,1,0],"rotation":[0,0,0,1],"scale":[1,1,1]}];
