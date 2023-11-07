import rock_x9_bin from './rock-x9.bin?url';

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
			"name": "rock.010",
			"rotation": [
				0.018407553434371948,
				-0.3068211078643799,
				0.9355142712593079,
				0.1741701364517212
			],
			"translation": [
				2.1609811782836914,
				0.33887729048728943,
				-3.0410423278808594
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
			"name": "rock.010",
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
			"count": 449,
			"max": [
				0.3873957395553589,
				0.4147951900959015,
				0.3948806822299957
			],
			"min": [
				-0.40184450149536133,
				-0.8351094126701355,
				-0.3051490783691406
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 449,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 449,
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
			"byteLength": 4519,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 4520,
			"uri": rock_x9_bin
		}
	]
}