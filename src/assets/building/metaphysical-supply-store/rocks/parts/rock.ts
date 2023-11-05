import rock_bin from './rock.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
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
			"name": "rock.001",
			"rotation": [
				-0.0640965923666954,
				0.7968355417251587,
				-0.4775758385658264,
				0.3645079731941223
			],
			"translation": [
				-1.6973419189453125,
				1.6476762294769287,
				-3.510453939437866
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.001",
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
			"count": 330,
			"max": [
				0.5410080552101135,
				0.4392968714237213,
				0.6530342698097229
			],
			"min": [
				-0.4793073236942291,
				-0.8608553409576416,
				-0.48411792516708374
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 330,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 330,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 864,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3403,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 3404,
			"uri": rock_bin
		}
	]
}