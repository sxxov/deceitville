import rock_x24_bin from './rock-x24.bin?url';

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
			"name": "rock.025",
			"rotation": [
				-0.7222760319709778,
				-0.3970472812652588,
				-0.5535666942596436,
				0.1193101704120636
			],
			"translation": [
				2.0210447311401367,
				1.5063766241073608,
				-2.582390308380127
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
			"name": "rock.025",
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
			"count": 204,
			"max": [
				0.4139676094055176,
				0.5170966982841492,
				0.2525297701358795
			],
			"min": [
				-0.35972705483436584,
				-0.599383533000946,
				-0.36046838760375977
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 204,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 204,
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
			"byteLength": 2145,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2148,
			"uri": rock_x24_bin
		}
	]
}