import clock_hand_second_bin from './clock-hand-second.bin?url';

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
			"name": "clock, hand, second",
			"translation": [
				0,
				0.012240000069141388,
				0
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "clock, hand, plastic",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.003",
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
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 24,
			"max": [
				0.01011485606431961,
				0.006120309233665466,
				0.10265117883682251
			],
			"min": [
				-0.01011485606431961,
				-1.1175870895385742e-8,
				-0.9135218858718872
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 24,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 24,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 36,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 290,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 292,
			"uri": clock_hand_second_bin
		}
	]
}