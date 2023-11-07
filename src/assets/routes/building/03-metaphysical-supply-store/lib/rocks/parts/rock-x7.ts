import rock_x7_bin from './rock-x7.bin?url';

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
			"name": "rock.008",
			"rotation": [
				-0.2882838547229767,
				-0.27766162157058716,
				0.20898135006427765,
				0.8922573924064636
			],
			"translation": [
				-0.2994782626628876,
				1.309169888496399,
				-3.280642032623291
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
			"name": "rock.008",
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
			"count": 402,
			"max": [
				0.5799376368522644,
				0.3112666606903076,
				0.5264856815338135
			],
			"min": [
				-0.4902300536632538,
				-0.8675568699836731,
				-0.4362873435020447
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 402,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 402,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1152,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 4095,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 4096,
			"uri": rock_x7_bin
		}
	]
}