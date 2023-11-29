import rock_x5_bin from './rock-x5.bin?url';

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
			"name": "rock.006",
			"rotation": [
				-0.023461414501070976,
				0.46961402893066406,
				-0.6336756944656372,
				0.614302396774292
			],
			"translation": [
				-2.2370851039886475,
				0.538502037525177,
				-1.924184799194336
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
			"name": "rock.006",
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
			"count": 260,
			"max": [
				0.5428242683410645,
				0.7084373235702515,
				0.4811326861381531
			],
			"min": [
				-0.5258806943893433,
				-0.7774525880813599,
				-0.42638537287712097
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 260,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 260,
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
			"byteLength": 2666,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2668,
			"uri": rock_x5_bin
		}
	]
}