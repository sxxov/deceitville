import i_bin from './i.bin?url';

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
			"name": "i.001",
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
			"name": "Text.004",
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
			"count": 154,
			"max": [
				0.48533499240875244,
				0,
				0.17720186710357666
			],
			"min": [
				0.3576485216617584,
				0,
				-0.26359039545059204
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 154,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 154,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 450,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1098,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1100,
			"uri": i_bin
		}
	]
}