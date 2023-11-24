import clock_body_bin from './clock-body.bin?url';

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
			"name": "clock, body"
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "clock, body",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"roughnessFactor": 0.20866140723228455
			}
		},
		{
			"doubleSided": true,
			"name": "clock, face",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "Circle",
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
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 464,
			"max": [
				1.0711170434951782,
				0.10178948938846588,
				1.0711170434951782
			],
			"min": [
				-1.0711170434951782,
				-0.10355585813522339,
				-1.0711170434951782
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 464,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 464,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 2010,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 32,
			"max": [
				1,
				0,
				1
			],
			"min": [
				-1,
				0,
				-1
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 32,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 32,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 90,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2670,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 342,
			"byteOffset": 2672
		}
	],
	"buffers": [
		{
			"byteLength": 3016,
			"uri": clock_body_bin
		}
	]
}