import c_bin from './c.bin?url';

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
			"name": "c",
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
			"name": "Text.010",
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
			"count": 462,
			"max": [
				-0.2360091358423233,
				0,
				0.2585335075855255
			],
			"min": [
				-0.40794339776039124,
				0,
				-0.21554991602897644
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 462,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 462,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1380,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2579,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2580,
			"uri": c_bin
		}
	]
}