import rock_x32_bin from './rock-x32.bin?url';

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
			"name": "rock.037",
			"rotation": [
				0.44808605313301086,
				0.2813721299171448,
				0.3972981572151184,
				0.7498018741607666
			],
			"translation": [
				-2.034921169281006,
				0.31110677123069763,
				0.5006441473960876
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
			"name": "rock.005",
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
			"count": 275,
			"max": [
				0.6852487325668335,
				0.8639048933982849,
				0.593583345413208
			],
			"min": [
				-0.478720486164093,
				-0.7391940355300903,
				-0.5886017680168152
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 275,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 275,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 720,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2867,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2868,
			"uri": rock_x32_bin
		}
	]
}