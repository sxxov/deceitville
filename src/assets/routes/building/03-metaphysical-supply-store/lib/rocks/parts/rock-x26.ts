import rock_x26_bin from './rock-x26.bin?url';

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
			"name": "rock.027",
			"rotation": [
				-0.06925290077924728,
				0.3745647966861725,
				0.9063729643821716,
				0.18273837864398956
			],
			"translation": [
				-0.9296951293945312,
				1.5626364946365356,
				-3.379845142364502
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
			"name": "rock.027",
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
			"count": 209,
			"max": [
				0.4658031761646271,
				0.5980620980262756,
				0.34937748312950134
			],
			"min": [
				-0.4017188847064972,
				-0.6687139868736267,
				-0.4160130023956299
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 209,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 209,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 576,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2213,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2216,
			"uri": rock_x26_bin
		}
	]
}