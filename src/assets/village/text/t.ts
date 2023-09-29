import t_bin from './t.bin?url';

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
			"name": "t",
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
			"name": "Text.006",
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
			"count": 252,
			"max": [
				0.19300469756126404,
				0,
				0.3246944844722748
			],
			"min": [
				0.006742591504007578,
				0,
				-0.29561734199523926
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 252,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 252,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 750,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1699,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1700,
			"uri": t_bin
		}
	]
}