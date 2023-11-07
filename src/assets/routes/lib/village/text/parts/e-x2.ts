import e_x2_bin from './e-x2.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "e",
			"rotation": [
				0.7071068286895752,
				0,
				0,
				0.7071068286895752
			]
		}
	],
	"meshes": [
		{
			"name": "Text.011",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 354,
			"max": [
				-0.40429818630218506,
				0,
				0.1831015646457672
			],
			"min": [
				-0.6107878684997559,
				0,
				-0.19658657908439636
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 354,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 354,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1056,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3020,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3020,
			"uri": e_x2_bin
		}
	]
}